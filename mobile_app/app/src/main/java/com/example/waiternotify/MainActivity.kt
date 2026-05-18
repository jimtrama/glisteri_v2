package com.example.waiternotify

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.core.content.ContextCompat
import com.example.waiternotify.ui.theme.WaiterNotifyTheme
import com.google.firebase.messaging.FirebaseMessaging
import kotlin.concurrent.thread
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import android.widget.Toast

class MainActivity : ComponentActivity() {
    private var selectedPage by mutableStateOf(AppPage.Requests)
    private var settingsState by mutableStateOf(DeviceRegistrationUiState())
    private var requestsState by mutableStateOf(WaiterRequestsUiState())
    private var removingRequestIds by mutableStateOf(setOf<String>())

    private val notificationPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        settingsState = settingsState.copy(
            notificationsGranted = granted,
            permissionMessage = if (granted) {
                getString(R.string.notifications_enabled_message)
            } else {
                getString(R.string.notifications_denied_message)
            }
        )
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        createWaiterNotificationChannel()
        requestNotificationPermissionIfNeeded()
        registerDevice()
        processNotificationIntent(intent)
        refreshWaiterRequests()

        setContent {
            WaiterNotifyTheme {
                Scaffold(
                    modifier = Modifier.fillMaxSize(),
                    containerColor = Color.Transparent
                ) { innerPadding ->
                    WaiterAppScreen(
                        selectedPage = selectedPage,
                        settingsState = settingsState,
                        requestsState = requestsState,
                        modifier = Modifier.padding(innerPadding),
                        onPageSelected = { selectedPage = it },
                        onRetryRegistration = { registerDevice() },
                        onRefreshRequests = { refreshWaiterRequests() },
                        onRemoveRequest = { removeRequest(it) },
                        removingRequestIds = removingRequestIds
                    )
                }
            }
        }
    }

    override fun onResume() {
        super.onResume()
        refreshWaiterRequests()
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        setIntent(intent)
        processNotificationIntent(intent)
        refreshWaiterRequests()
    }

    private fun requestNotificationPermissionIfNeeded() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) {
            settingsState = settingsState.copy(notificationsGranted = true)
            return
        }

        val alreadyGranted = ContextCompat.checkSelfPermission(
            this,
            Manifest.permission.POST_NOTIFICATIONS
        ) == PackageManager.PERMISSION_GRANTED

        settingsState = settingsState.copy(notificationsGranted = alreadyGranted)

        if (!alreadyGranted) {
            notificationPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
        }
    }

    private fun registerDevice() {
        settingsState = settingsState.copy(
            isLoading = true,
            registrationMessage = getString(R.string.registration_loading),
            token = "",
            tokenPreview = "",
            backendReachable = false
        )

        try {
            FirebaseMessaging.getInstance().token
                .addOnCompleteListener { task ->
                    if (!task.isSuccessful) {
                        Log.e("MainActivity", "Failed to fetch FCM token", task.exception)
                        settingsState = settingsState.copy(
                            isLoading = false,
                            registrationMessage = getString(R.string.firebase_missing_message)
                        )
                        return@addOnCompleteListener
                    }

                    val token = task.result.orEmpty()

                    if (token.isBlank()) {
                        settingsState = settingsState.copy(
                            isLoading = false,
                            registrationMessage = getString(R.string.firebase_missing_message)
                        )
                        return@addOnCompleteListener
                    }

                    settingsState = settingsState.copy(
                        token = token,
                        tokenPreview = token.take(18) + "...",
                        registrationMessage = getString(R.string.registration_sending)
                    )

                    thread(name = "register-device-token") {
                        val registered = DeviceTokenRepository.registerToken(token)
                        val registeredDevices = DeviceTokenRepository.fetchRegisteredDeviceCount()

                        runOnUiThread {
                            settingsState = settingsState.copy(
                                isLoading = false,
                                backendReachable = registered,
                                registeredDevices = registeredDevices,
                                registrationMessage = if (registered) {
                                    getString(R.string.registration_success)
                                } else {
                                    getString(R.string.registration_failed)
                                }
                            )
                        }
                    }
                }
        } catch (error: Exception) {
            Log.e("MainActivity", "Firebase is not configured yet", error)
            settingsState = settingsState.copy(
                isLoading = false,
                registrationMessage = getString(R.string.firebase_missing_message)
            )
        }
    }

    private fun refreshWaiterRequests() {
        requestsState = requestsState.copy(
            isLoading = true,
            errorMessage = ""
        )

        thread(name = "fetch-waiter-requests") {
            val result = WaiterRequestsRepository.fetchRequests()

            runOnUiThread {
                result.fold(
                    onSuccess = { requests ->
                        requestsState = requestsState.copy(
                            isLoading = false,
                            requests = requests,
                            lastUpdatedLabel = formatNowLabel(),
                            errorMessage = if (requests.isEmpty()) {
                                getString(R.string.requests_empty_message)
                            } else {
                                ""
                            }
                        )
                    },
                    onFailure = {
                        requestsState = requestsState.copy(
                            isLoading = false,
                            lastUpdatedLabel = formatNowLabel(),
                            errorMessage = getString(R.string.requests_load_failed_message)
                        )
                    }
                )
            }
        }
    }

    private fun processNotificationIntent(intent: Intent?) {
        val sunbedNumber = intent?.getStringExtra("sunbedNumber")?.trim().orEmpty()
        val sentAt = intent?.getStringExtra("sentAt")?.trim().orEmpty()
        val question = intent?.getStringExtra("question")?.trim().orEmpty()

        if (sunbedNumber.isNotBlank() || sentAt.isNotBlank() || question.isNotBlank()) {
            refreshWaiterRequests()
        }
    }

    private fun removeRequest(requestId: String) {
        if (requestId.isBlank() || removingRequestIds.contains(requestId)) {
            return
        }

        val requestToRemove = requestsState.requests.firstOrNull { it.id == requestId }

        if (requestToRemove == null) {
            requestsState = requestsState.copy(
                errorMessage = getString(R.string.request_remove_failed_message)
            )
            return
        }

        removingRequestIds = removingRequestIds + requestId

        thread(name = "delete-waiter-request") {
            val removed = WaiterRequestsRepository.removeRequestFromServer(requestToRemove)

            runOnUiThread {
                if (removed) {
                    val remainingRequests = requestsState.requests.filterNot { it.id == requestId }
                    requestsState = requestsState.copy(
                        requests = remainingRequests,
                        lastUpdatedLabel = formatNowLabel(),
                        errorMessage = if (remainingRequests.isEmpty()) {
                            getString(R.string.requests_empty_message)
                        } else {
                            ""
                        }
                    )
                } else {
                    requestsState = requestsState.copy(
                        errorMessage = getString(R.string.request_remove_failed_message)
                    )
                }

                removingRequestIds = removingRequestIds - requestId
            }
        }
    }

    private fun formatNowLabel(): String {
        return SimpleDateFormat("HH:mm", Locale.getDefault()).format(Date())
    }
}

enum class AppPage {
    Requests,
    Settings
}

data class DeviceRegistrationUiState(
    val isLoading: Boolean = true,
    val notificationsGranted: Boolean = false,
    val backendReachable: Boolean = false,
    val registeredDevices: Int? = null,
    val token: String = "",
    val tokenPreview: String = "",
    val registrationMessage: String = "",
    val permissionMessage: String = ""
)

data class WaiterRequestsUiState(
    val isLoading: Boolean = true,
    val requests: List<WaiterRequest> = emptyList(),
    val lastUpdatedLabel: String = "",
    val errorMessage: String = ""
)

@Composable
private fun WaiterAppScreen(
    selectedPage: AppPage,
    settingsState: DeviceRegistrationUiState,
    requestsState: WaiterRequestsUiState,
    modifier: Modifier = Modifier,
    onPageSelected: (AppPage) -> Unit,
    onRetryRegistration: () -> Unit,
    onRefreshRequests: () -> Unit,
    onRemoveRequest: (String) -> Unit,
    removingRequestIds: Set<String>
) {
    val backgroundBrush = Brush.verticalGradient(
        colors = listOf(
            Color(0xFF22150F),
            Color(0xFF3D271A),
            Color(0xFFC6A98B)
        )
    )

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(backgroundBrush)
            .statusBarsPadding()
            .padding(18.dp)
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            AppHeader(
                selectedPage = selectedPage,
                onPageSelected = onPageSelected
            )

            when (selectedPage) {
                AppPage.Requests -> RequestsPage(
                    state = requestsState,
                    onRefresh = onRefreshRequests,
                    onRemoveRequest = onRemoveRequest,
                    removingRequestIds = removingRequestIds
                )
                AppPage.Settings -> SettingsPage(
                    state = settingsState,
                    onRetry = onRetryRegistration
                )
            }
        }
    }
}

@Composable
private fun AppHeader(
    selectedPage: AppPage,
    onPageSelected: (AppPage) -> Unit
) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Text(
            text = "Glisteri",
            style = MaterialTheme.typography.headlineMedium,
            color = Color(0xFFF6EBDD),
            fontWeight = FontWeight.SemiBold
        )
        Text(
            text = "Waiter Console",
            style = MaterialTheme.typography.titleLarge,
            color = Color(0xFFE6C8A8)
        )
        Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            HeaderTab(
                label = "Requests",
                selected = selectedPage == AppPage.Requests,
                onClick = { onPageSelected(AppPage.Requests) }
            )
            HeaderTab(
                label = "Settings",
                selected = selectedPage == AppPage.Settings,
                onClick = { onPageSelected(AppPage.Settings) }
            )
        }
    }
}

@Composable
private fun HeaderTab(
    label: String,
    selected: Boolean,
    onClick: () -> Unit
) {
    Button(
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            containerColor = if (selected) Color(0xFF80B26A) else Color(0x26FFFFFF),
            contentColor = if (selected) Color(0xFF14220F) else Color(0xFFF7EEE4)
        ),
        shape = RoundedCornerShape(18.dp)
    ) {
        Text(text = label)
    }
}

@Composable
private fun RequestsPage(
    state: WaiterRequestsUiState,
    onRefresh: () -> Unit,
    onRemoveRequest: (String) -> Unit,
    removingRequestIds: Set<String>
) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        StatusCard(
            title = "Live requests",
            body = if (state.lastUpdatedLabel.isBlank()) {
                "Loading active waiter requests from the server."
            } else {
                "Last refreshed at ${state.lastUpdatedLabel}. ${state.requests.size} active request(s) on the server."
            },
            accent = Color(0xFF80B26A)
        )

        Button(
            onClick = onRefresh,
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFFE6C8A8),
                contentColor = Color(0xFF2A1B12)
            ),
            shape = RoundedCornerShape(18.dp)
        ) {
            Text("Reload inbox")
        }

        if (state.errorMessage.isNotBlank() && state.requests.isNotEmpty()) {
            EmptyStateCard(message = state.errorMessage)
        }

        if (state.isLoading) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                CircularProgressIndicator(
                    color = Color(0xFFE6C8A8),
                    strokeWidth = 3.dp,
                    modifier = Modifier.height(22.dp)
                )
                Text(
                    text = "Loading waiter requests...",
                    color = Color(0xFFF7EEE4),
                    style = MaterialTheme.typography.bodyMedium
                )
            }
            return
        }

        if (state.requests.isEmpty()) {
            EmptyStateCard(message = state.errorMessage.ifBlank { "No active waiter requests right now." })
            return
        }

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxSize()
        ) {
            LazyColumn(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(
                    items = state.requests,
                    key = { request -> request.id }
                ) { request ->
                    RequestCard(
                        request = request,
                        removing = removingRequestIds.contains(request.id),
                        onRemove = { onRemoveRequest(request.id) }
                    )
                }
            }
        }
    }
}

@Composable
private fun SettingsPage(
    state: DeviceRegistrationUiState,
    onRetry: () -> Unit
) {
    val scrollState = rememberScrollState()
    val clipboardManager = LocalClipboardManager.current
    val context = LocalContext.current

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .verticalScroll(scrollState),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = "This device will receive a notification whenever a sunbed calls for service.",
            style = MaterialTheme.typography.bodyLarge,
            color = Color(0xFFEFE2D4)
        )

        StatusCard(
            title = "Device Registration",
            body = state.registrationMessage.ifBlank { "Preparing Firebase connection..." },
            accent = if (state.backendReachable) Color(0xFF80B26A) else Color(0xFFE1B681)
        )

        StatusCard(
            title = "Notifications",
            body = when {
                state.notificationsGranted && state.permissionMessage.isBlank() -> "Notifications are enabled."
                state.permissionMessage.isNotBlank() -> state.permissionMessage
                else -> "Waiting for notification permission."
            },
            accent = if (state.notificationsGranted) Color(0xFF80B26A) else Color(0xFFD7826A)
        )

        InfoCard(label = "Backend", value = BuildConfig.BACKEND_BASE_URL)
        InfoCard(
            label = "Registered devices",
            value = state.registeredDevices?.toString() ?: "Unknown"
        )
        InfoCard(
            label = "Token preview",
            value = if (state.tokenPreview.isBlank()) "Will appear after Firebase connects" else state.tokenPreview,
            onClick = if (state.token.isBlank()) {
                null
            } else {
                {
                    clipboardManager.setText(AnnotatedString(state.token))
                    Toast.makeText(context, "Token copied", Toast.LENGTH_SHORT).show()
                }
            }
        )

        if (state.isLoading) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                CircularProgressIndicator(
                    color = Color(0xFFE6C8A8),
                    strokeWidth = 3.dp,
                    modifier = Modifier.height(22.dp)
                )
                Text(
                    text = "Registering this device...",
                    color = Color(0xFFF7EEE4),
                    style = MaterialTheme.typography.bodyMedium
                )
            }
        }

        Button(
            onClick = onRetry,
            enabled = !state.isLoading,
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF80B26A),
                contentColor = Color(0xFF14220F),
                disabledContainerColor = Color(0xFF80B26A).copy(alpha = 0.55f),
                disabledContentColor = Color(0xFF14220F).copy(alpha = 0.7f)
            ),
            shape = RoundedCornerShape(18.dp)
        ) {
            Text("Try again")
        }

        Text(
            text = "Before running live pushes, place your Firebase google-services.json file inside mobile_app/app.",
            color = Color(0xFFF6EBDD),
            style = MaterialTheme.typography.bodyMedium
        )
    }
}

@Composable
private fun RequestCard(
    request: WaiterRequest,
    removing: Boolean,
    onRemove: () -> Unit
) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFFF8F1E7)
        ),
        shape = RoundedCornerShape(24.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 6.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = if (request.type == REQUEST_TYPE_QUESTION) {
                        "Question from sunbed ${request.sunbedNumber}"
                    } else {
                        "Sunbed ${request.sunbedNumber}"
                    },
                    style = MaterialTheme.typography.titleLarge,
                    color = Color(0xFF2A1B12),
                    fontWeight = FontWeight.SemiBold
                )
                IconButton(
                    onClick = onRemove,
                    enabled = !removing
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_delete),
                        contentDescription = "Remove request",
                        tint = if (removing) Color(0xFF8A6B54) else Color.Unspecified
                    )
                }
            }
            Text(
                text = if (request.type == REQUEST_TYPE_QUESTION) {
                    "Guest question"
                } else {
                    "Waiter call"
                },
                style = MaterialTheme.typography.bodyMedium,
                color = Color(0xFF8A6B54)
            )
            if (request.question.isNotBlank()) {
                Text(
                    text = request.question,
                    style = MaterialTheme.typography.bodyMedium,
                    color = Color(0xFF60493B)
                )
            }
            Text(
                text = if (removing) "Removing..." else request.receivedAt,
                style = MaterialTheme.typography.bodyMedium,
                color = Color(0xFF60493B)
            )
        }
    }
}

@Composable
private fun EmptyStateCard(message: String) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = Color(0x26FFFFFF)
        ),
        shape = RoundedCornerShape(24.dp)
    ) {
        Text(
            text = message,
            color = Color(0xFFF7EEE4),
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(18.dp)
        )
    }
}

@Composable
private fun StatusCard(title: String, body: String, accent: Color) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFFF8F1E7)
        ),
        shape = RoundedCornerShape(24.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 6.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Box(
                    modifier = Modifier
                        .width(12.dp)
                        .height(12.dp)
                        .background(accent, RoundedCornerShape(999.dp))
                )
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleMedium,
                    color = Color(0xFF2A1B12),
                    fontWeight = FontWeight.SemiBold
                )
            }

            Text(
                text = body,
                style = MaterialTheme.typography.bodyMedium,
                color = Color(0xFF60493B)
            )
        }
    }
}

@Composable
private fun InfoCard(label: String, value: String, onClick: (() -> Unit)? = null) {
    Card(
        modifier = if (onClick == null) {
            Modifier
        } else {
            Modifier.clickable(onClick = onClick)
        },
        colors = CardDefaults.cardColors(
            containerColor = Color(0x26FFFFFF)
        ),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.labelLarge,
                color = Color(0xFFE5C6A3)
            )
            Text(
                text = value,
                style = MaterialTheme.typography.bodyMedium,
                color = Color(0xFFF7EEE4),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
