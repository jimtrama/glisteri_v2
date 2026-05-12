package com.example.waiternotify.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = SandSoft,
    secondary = SeaGreen,
    tertiary = SandLight,
    background = WoodDark,
    surface = WoodMid,
    onPrimary = WoodDark,
    onSecondary = WoodDark,
    onTertiary = WoodDark,
    onBackground = SandLight,
    onSurface = SandLight
)

private val LightColorScheme = lightColorScheme(
    primary = WoodDark,
    secondary = SeaGreen,
    tertiary = SandSoft,
    background = SandLight,
    surface = Color.White,
    onPrimary = SandLight,
    onSecondary = WoodDark,
    onTertiary = WoodDark,
    onBackground = WoodDark,
    onSurface = WoodDark
)

@Composable
fun WaiterNotifyTheme(
    darkTheme: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
