package com.example.waiternotify

import android.util.Log
import org.json.JSONArray
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

data class WaiterRequest(
    val id: String,
    val sunbedNumber: String,
    val receivedAt: String
)

object WaiterRequestsRepository {
    private const val tag = "WaiterRequestsRepository"

    fun fetchRequests(): List<WaiterRequest> {
        val connection = (URL("${BuildConfig.BACKEND_BASE_URL}/api/call-waiter").openConnection() as HttpURLConnection).apply {
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
                return emptyList()
            }

            val payload = JSONObject(body)
            val requests = payload.optJSONArray("requests") ?: JSONArray()
            buildList {
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
        } catch (error: Exception) {
            Log.e(tag, "Failed to fetch waiter requests", error)
            emptyList()
        } finally {
            connection.disconnect()
        }
    }

    fun removeRequest(requestId: String): Boolean {
        if (requestId.isBlank()) {
            return false
        }

        val connection = (URL("${BuildConfig.BACKEND_BASE_URL}/api/call-waiter/$requestId").openConnection() as HttpURLConnection).apply {
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
                Log.w(tag, "Remove request failed: $responseCode $body")
                return false
            }

            true
        } catch (error: Exception) {
            Log.e(tag, "Failed to remove waiter request", error)
            false
        } finally {
            connection.disconnect()
        }
    }
}
