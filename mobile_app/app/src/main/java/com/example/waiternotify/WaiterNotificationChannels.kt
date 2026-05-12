package com.example.waiternotify

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build

const val WAITER_NOTIFICATION_CHANNEL_ID = "waiter_requests"

fun Context.createWaiterNotificationChannel() {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
        return
    }

    val channel = NotificationChannel(
        WAITER_NOTIFICATION_CHANNEL_ID,
        getString(R.string.notification_channel_name),
        NotificationManager.IMPORTANCE_HIGH
    ).apply {
        description = getString(R.string.notification_channel_description)
    }

    val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    notificationManager.createNotificationChannel(channel)
}
