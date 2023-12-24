@file:Suppress(
    "NO_ACTUAL_FOR_EXPECT" // K2/JVM would fail to compile once removed
)
package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

/*
 Do not remove the redundant invariance 'out'. It is needed for Jvm
 */
expect inline fun Later<out Any?>.test(): LaterTestResult