@file:Suppress(
    "NO_ACTUAL_FOR_EXPECT", // removing this will make the K2/JVM not compile,
    "EXPECT_ACTUAL_MISMATCH", // removing this will make the K2/JVM not compile
)
package koncurrent.later

import koncurrent.Later

expect fun <T, S, R> Later<T>.zip(
    other: Later<S>,
    onResolve: (Pair<T, S>) -> R
): Later<R>

expect fun <T, S, R> Later<T>.andZip(
    other: Later<S>,
    onResolve: (Pair<T, S>) -> Later<R>
): Later<R>