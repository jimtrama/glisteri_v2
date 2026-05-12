package com.example.waiternotify

import android.Manifest
import android.app.PendingIntent
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import kotlin.concurrent.thread

class WaiterFirebaseMessagingService : FirebaseMessagingService() {
    override fun onCreate() {
        super.onCreate()
        createWaiterNotificationChannel()
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
        thread(name = "register-fcm-token") {
            DeviceTokenRepository.registerToken(token)
        }
    }

    override fun onMessageReceived(message: RemoteMessage) {
        super.onMessageReceived(message)

        val title = message.notification?.title
            ?: message.data["title"]
            ?: getString(R.string.notification_title_default)
        val body = message.notification?.body
            ?: message.data["body"]
            ?: getString(R.string.notification_body_default)
        val sunbedNumber = message.data["sunbedNumber"]?.trim().orEmpty()
        val type = message.data["type"]?.trim().orEmpty().ifBlank {
            REQUEST_TYPE_CALL
        }
        val question = message.data["question"]?.trim().orEmpty()
        val sentAt = message.data["sentAt"]?.takeIf { it.isNotBlank() } ?: bodyTimestampFallback()

        if (sunbedNumber.isNotBlank()) {
            WaiterRequestsRepository.addRequestIfMissing(
                context = applicationContext,
                sunbedNumber = sunbedNumber,
                receivedAt = sentAt,
                type = type,
                question = question
            )
        }

        showNotification(title, body, sunbedNumber, sentAt, type, question)
    }

    private fun showNotification(title: String, body: String, sunbedNumber: String, sentAt: String, type: String, question: String) {
        if (
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED
        ) {
            return
        }

        val launchIntent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_SINGLE_TOP or Intent.FLAG_ACTIVITY_CLEAR_TOP
            putExtra("sunbedNumber", sunbedNumber)
            putExtra("sentAt", sentAt)
            putExtra("type", type)
            putExtra("question", question)
        }

        val pendingIntent = PendingIntent.getActivity(
            this,
            sunbedNumber.hashCode(),
            launchIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .build()

        NotificationManagerCompat.from(this).notify(System.currentTimeMillis().toInt(), notification)
    }

    companion object {
        const val NOTIFICATION_CHANNEL_ID = WAITER_NOTIFICATION_CHANNEL_ID
    }

    private fun bodyTimestampFallback(): String {
        return java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss", java.util.Locale.getDefault())
            .format(java.util.Date())
    }
}
