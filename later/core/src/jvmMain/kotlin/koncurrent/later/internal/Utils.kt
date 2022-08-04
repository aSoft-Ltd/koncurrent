@file:JvmName("UtilsJvm")

package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.later.internal.PlatformConcurrentMonad
import java.util.concurrent.CompletableFuture
import java.util.function.BiConsumer

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<out T> {
    val future = CompletableFuture<T>()
    then(
        executor = executor,
        onResolved = { future.complete(it) },
        onRejected = { future.completeExceptionally(it) }
    )
    return future
}

internal actual fun <T> Later<T>.toPlatformConcurrentMonad(): PlatformConcurrentMonad<out T> = toPlatformConcurrentMonad(executor)
