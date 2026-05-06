package com.example.waiternotify

import android.util.Log
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL

object DeviceTokenRepository {
    private const val tag = "DeviceTokenRepository"

    fun registerToken(token: String): Boolean {
        if (token.isBlank()) {
            return false
        }

        return postToken(
            endpoint = "${BuildConfig.BACKEND_BASE_URL}/api/devices/register",
            token = token
        )
    }

    fun unregisterToken(token: String): Boolean {
        if (token.isBlank()) {
            return false
        }

        return postToken(
            endpoint = "${BuildConfig.BACKEND_BASE_URL}/api/devices/unregister",
            token = token
        )
    }

    fun fetchRegisteredDeviceCount(): Int? {
        val connection = (URL("${BuildConfig.BACKEND_BASE_URL}/api/devices/register").openConnection() as HttpURLConnection).apply {
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
                Log.w(tag, "Device count request failed: $responseCode $body")
                return null
            }

            JSONObject(body).optInt("registeredDevices", -1).takeIf { it >= 0 }
        } catch (error: Exception) {
            Log.e(tag, "Failed to fetch device count", error)
            null
        } finally {
            connection.disconnect()
        }
    }

    private fun postToken(endpoint: String, token: String): Boolean {
        val connection = (URL(endpoint).openConnection() as HttpURLConnection).apply {
            requestMethod = "POST"
            connectTimeout = 8_000
            readTimeout = 8_000
            doOutput = true
            setRequestProperty("Content-Type", "application/json; charset=utf-8")
            setRequestProperty("Accept", "application/json")
        }

        return try {
            val payload = JSONObject()
                .put("token", token)
                .toString()

            OutputStreamWriter(connection.outputStream, Charsets.UTF_8).use { writer ->
                writer.write(payload)
            }

            val responseCode = connection.responseCode
            val stream = if (responseCode in 200..299) connection.inputStream else connection.errorStream
            val body = stream?.use { input ->
                BufferedReader(InputStreamReader(input)).readText()
            }.orEmpty()

            if (responseCode !in 200..299) {
                Log.w(tag, "Token request failed: $responseCode $body")
                return false
            }

            true
        } catch (error: Exception) {
            Log.e(tag, "Token request failed", error)
            false
        } finally {
            connection.disconnect()
        }
    }
}
