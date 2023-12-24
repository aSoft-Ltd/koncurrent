@file:Suppress(
    "EXPECT_ACTUAL_INCOMPATIBILITY" // K2/JVM would fail to compile once removed
)
package koncurrent

expect interface Later<out T>