@file:Suppress("Since15")

package koncurrent

import kase.Failure
import kase.Success
import java.util.concurrent.CompletableFuture

actual abstract class AbstractAwaited<out T> {
    fun toCompletableFuture(): CompletableFuture<out T> {
        this as Awaited<T>
        val future = CompletableFuture<T>()
        complete {
            when (it) {
                is Failure -> future.completeExceptionally(it.cause)
                is Success -> future.complete(it.data)
            }
        }
        return future
    }
}