package com.example.waiternotify

import android.content.Context
import android.util.Log
import org.json.JSONArray
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.UUID

const val REQUEST_TYPE_CALL = "waiter_call"
const val REQUEST_TYPE_QUESTION = "waiter_question"

data class WaiterRequest(
    val id: String,
    val sunbedNumber: String,
    val receivedAt: String,
    val type: String = REQUEST_TYPE_CALL,
    val question: String = ""
)

object WaiterRequestsRepository {
    private const val tag = "WaiterRequestsRepository"
    private const val preferencesName = "waiter_requests_store"
    private const val requestsKey = "requests"
    private const val maxStoredRequests = 50

    fun fetchRequests(): Result<List<WaiterRequest>> {
        val connection = (URL("${BuildConfig.BACKEND_BASE_URL}/api/waiter-requests").openConnection() as HttpURLConnection).apply {
            requestMethod = "GET"
            connectTimeout = 8_000
            readTimeout = 8_000
            setRequestProperty("Accept", "application/json")
        }

        return try {
            val responseCode = connection.responseCode
            val stream = if (responseCode in 200..299) connection.inputStream else connection.errorStream
            val body = stream?.use { input ->
                BufferedReader(InputStreamReader(input)).readText()
            }.orEmpty()

            if (responseCode !in 200..299) {
                Log.w(tag, "Fetch requests failed: $responseCode $body")
                return Result.failure(IllegalStateException("Fetch requests failed with HTTP $responseCode"))
            }

            val payload = JSONObject(body)
            val requests = payload.optJSONArray("requests") ?: JSONArray()
            Result.success(parseRequests(requests))
        } catch (error: Exception) {
            Log.e(tag, "Failed to fetch waiter requests", error)
            Result.failure(error)
        } finally {
            connection.disconnect()
        }
    }

    fun removeRequestFromServer(request: WaiterRequest): Boolean {
        if (request.id.isBlank()) {
            return false
        }

        val route = if (request.type == REQUEST_TYPE_QUESTION) {
            "ask-waiter"
        } else {
            "call-waiter"
        }
        val endpoint = "${BuildConfig.BACKEND_BASE_URL}/api/$route/${java.net.URLEncoder.encode(request.id, "UTF-8")}"
        val connection = (URL(endpoint).openConnection() as HttpURLConnection).apply {
            requestMethod = "DELETE"
            connectTimeout = 8_000
            readTimeout = 8_000
            setRequestProperty("Accept", "application/json")
        }

        return try {
            val responseCode = connection.responseCode
            val stream = if (responseCode in 200..299) connection.inputStream else connection.errorStream
            val body = stream?.use { input ->
                BufferedReader(InputStreamReader(input)).readText()
            }.orEmpty()

            if (responseCode !in 200..299) {
                Log.w(tag, "Delete request failed: $responseCode $body")
                return false
            }

            true
        } catch (error: Exception) {
            Log.e(tag, "Failed to delete waiter request", error)
            false
        } finally {
            connection.disconnect()
        }
    }

    fun getRequests(context: Context): List<WaiterRequest> {
        val raw = context.getSharedPreferences(preferencesName, Context.MODE_PRIVATE)
            .getString(requestsKey, "[]")
            .orEmpty()

        val requests = JSONArray(raw)
        return parseRequests(requests)
    }

    private fun parseRequests(requests: JSONArray): List<WaiterRequest> {
        return buildList {
            for (index in 0 until requests.length()) {
                val item = requests.optJSONObject(index) ?: continue
                add(
                    WaiterRequest(
                        id = item.optString("id"),
                        sunbedNumber = item.optString("sunbedNumber"),
                        receivedAt = item.optString("receivedAt"),
                        type = item.optString("type", REQUEST_TYPE_CALL),
                        question = item.optString("question")
                    )
                )
            }
        }
    }

    fun addRequest(
        context: Context,
        sunbedNumber: String,
        receivedAt: String = timestampNow(),
        type: String = REQUEST_TYPE_CALL,
        question: String = ""
    ): WaiterRequest {
        val request = WaiterRequest(
            id = UUID.randomUUID().toString(),
            sunbedNumber = sunbedNumber,
            receivedAt = receivedAt,
            type = type,
            question = question
        )

        val updatedRequests = listOf(request) + getRequests(context)
        saveRequests(context, updatedRequests.take(maxStoredRequests))
        return request
    }

    fun addRequestIfMissing(
        context: Context,
        sunbedNumber: String,
        receivedAt: String,
        type: String = REQUEST_TYPE_CALL,
        question: String = ""
    ): WaiterRequest {
        val currentRequests = getRequests(context)
        val existingRequest = currentRequests.firstOrNull {
            it.sunbedNumber == sunbedNumber && it.receivedAt == receivedAt && it.type == type
        }

        if (existingRequest != null) {
            return existingRequest
        }

        return addRequest(
            context = context,
            sunbedNumber = sunbedNumber,
            receivedAt = receivedAt,
            type = type,
            question = question
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
                    .put("type", request.type)
                    .put("question", request.question)
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
