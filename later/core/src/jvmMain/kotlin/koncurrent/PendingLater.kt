@file:Suppress("ACTUAL_WITHOUT_EXPECT", "NOTHING_TO_INLINE", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE")

package koncurrent

import java.util.concurrent.CompletableFuture

actual typealias PendingLater<T> = CompletableFuture<T>

actual inline fun <T> PendingLater<T>.resolveWith(value: T) = complete(value)

actual inline fun <T> PendingLater<T>.rejectWith(error: Throwable) = completeExceptionally(error)