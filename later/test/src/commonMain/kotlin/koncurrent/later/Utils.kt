@file:Suppress(
    "NO_ACTUAL_FOR_EXPECT", // K2/JVM would fail to compile once removed,
    // "EXPECT_ACTUAL_INCOMPATIBILITY" // removing this will make the K2/JVM not compile
)
package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

/*
 Do not remove the redundant invariance 'out'. It is needed for Jvm
 */
expect fun Later<out Any?>.test(): LaterTestResult