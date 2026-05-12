package com.example.waiternotify

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.UUID

data class WaiterRequest(
    val id: String,
    val sunbedNumber: String,
    val receivedAt: String
)

object WaiterRequestsRepository {
    private const val preferencesName = "waiter_requests_store"
    private const val requestsKey = "requests"
    private const val maxStoredRequests = 50

    fun getRequests(context: Context): List<WaiterRequest> {
        val raw = context.getSharedPreferences(preferencesName, Context.MODE_PRIVATE)
            .getString(requestsKey, "[]")
            .orEmpty()

        val requests = JSONArray(raw)

        return buildList {
            for (index in 0 until requests.length()) {
                val item = requests.optJSONObject(index) ?: continue
                add(
                    WaiterRequest(
                        id = item.optString("id"),
                        sunbedNumber = item.optString("sunbedNumber"),
                        receivedAt = item.optString("receivedAt")
                    )
                )
            }
        }
    }

    fun addRequest(
        context: Context,
        sunbedNumber: String,
        receivedAt: String = timestampNow()
    ): WaiterRequest {
        val request = WaiterRequest(
            id = UUID.randomUUID().toString(),
            sunbedNumber = sunbedNumber,
            receivedAt = receivedAt
        )

        val updatedRequests = listOf(request) + getRequests(context)
        saveRequests(context, updatedRequests.take(maxStoredRequests))
        return request
    }

    fun addRequestIfMissing(
        context: Context,
        sunbedNumber: String,
        receivedAt: String
    ): WaiterRequest {
        val currentRequests = getRequests(context)
        val existingRequest = currentRequests.firstOrNull {
            it.sunbedNumber == sunbedNumber && it.receivedAt == receivedAt
        }

        if (existingRequest != null) {
            return existingRequest
        }

        return addRequest(
            context = context,
            sunbedNumber = sunbedNumber,
            receivedAt = receivedAt
        )
    }

    fun removeRequest(context: Context, requestId: String): Boolean {
        if (requestId.isBlank()) {
            return false
        }

        val currentRequests = getRequests(context)
        val updatedRequests = currentRequests.filterNot { it.id == requestId }

        if (updatedRequests.size == currentRequests.size) {
            return false
        }

        saveRequests(context, updatedRequests)
        return true
    }

    private fun saveRequests(context: Context, requests: List<WaiterRequest>) {
        val payload = JSONArray()

        requests.forEach { request ->
            payload.put(
                JSONObject()
                    .put("id", request.id)
                    .put("sunbedNumber", request.sunbedNumber)
                    .put("receivedAt", request.receivedAt)
            )
        }

        context.getSharedPreferences(preferencesName, Context.MODE_PRIVATE)
            .edit()
            .putString(requestsKey, payload.toString())
            .apply()
    }

    private fun timestampNow(): String {
        return SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault()).format(Date())
    }
}
