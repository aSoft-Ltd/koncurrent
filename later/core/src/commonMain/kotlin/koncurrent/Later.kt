@file:Suppress(
    "EXPECT_ACTUAL_INCOMPATIBILITY", // removing this will make the K2/JVM not compile
    "NO_ACTUAL_FOR_EXPECT", // removing this will make the K2/JVM not compile
)
package koncurrent

expect class Later<out T>

expect fun <T> Later<T>.resolveWith(value: T) : Boolean

expect fun <T> Later<T>.rejectWith(error: Throwable) : Boolean
