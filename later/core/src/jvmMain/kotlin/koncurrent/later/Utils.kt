@file:JvmName("UtilsJvm")

package koncurrent.later

import koncurrent.Executor
import koncurrent.Later
import koncurrent.later.internal.PlatformConcurrentMonad
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

fun <T> CompletableFuture<T>.toLater(): Later<out T> = Later { resolve, reject ->
    whenComplete(completeConsumer(resolve, reject))
}

fun <T> CompletableFuture<T>.toLater(executor: Executor): Later<out T> = Later { resolve, reject ->
    whenCompleteAsync(completeConsumer(resolve, reject), executor)
}
