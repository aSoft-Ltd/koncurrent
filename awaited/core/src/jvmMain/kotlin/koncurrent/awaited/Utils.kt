@file:JvmName("UtilsJvm")
@file:Suppress("Since15")

package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.Executor
import koncurrent.awaited
import java.util.concurrent.CompletableFuture
import java.util.function.BiConsumer

private inline fun <T> completeConsumer(
    crossinline resolve: (T) -> Unit,
    crossinline reject: (Throwable) -> Unit
): BiConsumer<T?, Throwable?> = BiConsumer { value, error ->
    when {
        value != null -> resolve(value)
        error != null -> reject(error)
        else /* value == null && err == null */ -> reject(IllegalStateException("Completable future didn't return with value or exception"))
    }
}

fun <T> CompletableFuture<T>.toAwaited(): Awaited<T> = awaited { resolve, reject ->
    whenComplete(completeConsumer(resolve, reject))
}

fun <T> CompletableFuture<T>.toAwaited(executor: Executor): Awaited<T> = awaited { resolve, reject ->
    whenCompleteAsync(completeConsumer(resolve, reject), executor)
}
