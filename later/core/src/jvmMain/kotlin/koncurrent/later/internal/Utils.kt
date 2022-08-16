@file:JvmName("UtilsJvm")

package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.LaterPromise
import koncurrent.later.internal.PlatformConcurrentMonad
import java.util.concurrent.CompletableFuture
import java.util.function.BiConsumer

internal actual fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<out T> {
    val future = CompletableFuture<T>()
    then(
        executor = executor,
        onResolved = { future.complete(it) },
        onRejected = { future.completeExceptionally(it) }
    )
    return future
}
