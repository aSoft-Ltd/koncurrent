@file:Suppress(
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT",
    "ACTUAL_TYPE_ALIAS_WITH_USE_SITE_VARIANCE",
    "ACTUAL_IGNORABILITY_NOT_MATCH_EXPECT"
//    "EXPECT_ACTUAL_INCOMPATIBILITY",
//    "EXPECT_ACTUAL_INCOMPATIBLE_TYPE_PARAMETER_VARIANCE",
)

package koncurrent

import java.util.concurrent.CompletableFuture

actual typealias Later<T> = CompletableFuture<out T>

actual fun <T> Later<T>.resolveWith(value: T) : Boolean {
    this as CompletableFuture<T>
    return complete(value)
}

actual fun <T> Later<T>.rejectWith(error: Throwable) = completeExceptionally(error)