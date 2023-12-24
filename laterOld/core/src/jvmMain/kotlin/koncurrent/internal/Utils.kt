@file:JvmName("UtilsJvm")

package koncurrent.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catchPromise
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

//internal actual fun <T, R> ((T) -> R).asExecutor(): Executor = error("")

//internal actual fun <T, R> Executor.asResolver(): (T) -> R = error("")