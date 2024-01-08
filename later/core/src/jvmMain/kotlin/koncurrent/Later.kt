@file:Suppress(
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT",
    "ACTUAL_TYPE_ALIAS_WITH_USE_SITE_VARIANCE"
)

package koncurrent

import java.util.concurrent.CompletableFuture

actual typealias Later<T> = CompletableFuture<T>

actual inline fun <T> Later<T>.resolveWith(value: T) {
//    this as CompletableFuture<T>
    complete(value)
}

actual inline fun <T> Later<T>.rejectWith(error: Throwable) = completeExceptionally(error)