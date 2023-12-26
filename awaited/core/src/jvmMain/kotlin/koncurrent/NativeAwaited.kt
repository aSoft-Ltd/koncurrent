@file:Suppress("Since15")
package koncurrent

import java.util.concurrent.CompletableFuture

actual interface NativeAwaited<out T> {
    fun toCompletableFuture() : CompletableFuture<out T>
}