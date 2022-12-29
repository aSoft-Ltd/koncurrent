@file:JvmName("UtilsJvm")

package koncurrent.internal

import koncurrent.Executor
import koncurrent.LaterPromise
import java.util.concurrent.CompletableFuture

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<T> {
    val future = CompletableFuture<T>()
    then(
        executor = executor,
        onResolved = { future.complete(it) },
        onRejected = { future.completeExceptionally(it) }
    )
    return future
}
