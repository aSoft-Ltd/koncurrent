@file:JvmName("UtilsJvm")
@file:Suppress(
    "Since15"
)

package koncurrent.later

import koncurrent.Executor
import koncurrent.Later
import koncurrent.PendingLater
import java.util.concurrent.CompletionStage
import java.util.function.BiConsumer

internal inline fun <T> completeConsumer(
    crossinline resolve: (T) -> Unit,
    crossinline reject: (Throwable) -> Unit
): BiConsumer<T?, Throwable?> = BiConsumer { value, error ->
    when {
        value != null -> resolve(value)
        error != null -> reject(error)
        else /* value == null && err == null */ -> reject(IllegalStateException("Completable future didn't return with value or exception"))
    }
}

fun <T> CompletionStage<T>.toLater(): Later<T> {
    if (this is Later) return this
    return Later { resolve, reject ->
        whenComplete(completeConsumer(resolve, reject))
    } as Later<T>
}

fun <T> CompletionStage<T>.toLater(executor: Executor): Later<T> {
    if (this is Later) return this
    return Later { resolve, reject ->
        whenCompleteAsync(completeConsumer(resolve, reject), executor)
    }
}

fun <T> Later<T>.toPendingLater(): PendingLater<T> {
    if (this is PendingLater) return this
    val later = PendingLater<T>()
    whenComplete { value, error ->
        when {
            value != null -> later.complete(value)
            error != null -> later.completeExceptionally(error)
            else /* value == null && err == null */ -> {
                val err = IllegalStateException("Completable future didn't return with value or exception")
                later.completeExceptionally(err)
            }
        }
    }
    return later
}
