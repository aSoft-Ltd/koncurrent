@file:Suppress(
    "NO_ACTUAL_FOR_EXPECT" // K2/JVM would fail to compile once removed
)
package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

expect inline fun Later<Any?>.test(): LaterTestResult