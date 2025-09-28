@file:Suppress(
    "ACTUAL_WITHOUT_EXPECT",
)

package koncurrent.later

import kase.Failure
import koncurrent.Executor
import kase.Result
import kase.Success
import koncurrent.Executors
import koncurrent.Later
import java.util.concurrent.CompletableFuture
import java.util.concurrent.CompletionStage
import java.util.function.Function

actual fun <T, R> Later<T>.then(
    executor: Executor,
    onResolved: (T) -> R
): Later<R> = thenApplyAsync(onResolved, executor)

actual fun <T, R> Later<T>.then(
    onResolved: (T) -> R
): Later<R> = thenApplyAsync(onResolved)
actual fun <T, R> Later<T>.andThen(
    onResolved: (T) -> Later<R>
): Later<R> = thenComposeAsync{ onResolved(it) }

actual fun <T, R> Later<T>.andThen(
    executor: Executor,
    onResolved: (T) -> Later<R>
): Later<R> {
    val future = CompletableFuture<R>()
    finally(executor) { res1 ->
        when (res1) {
            is Failure -> future.completeExceptionally(res1.cause)
            is Success -> onResolved(res1.data).finally { res2 ->
                when (res2) {
                    is Failure -> future.completeExceptionally(res2.cause)
                    is Success -> future.complete(res2.data)
                }
            }
        }
    }
    return future
}

actual fun <T> Later<T>.catch(
    executor: Executor,
    recover: (Throwable) -> T
): Later<T> {
    this as CompletableFuture<T>
    return exceptionallyAsync(recover, executor)
}

actual fun <T> Later<T>.catch(
    recover: (Throwable) -> T
): Later<T> {
    this as CompletableFuture<T>
    return exceptionallyAsync(recover)
}

actual fun <T> Later<T>.finally(
    executor: Executor,
    cleanUp: (state: Result<T>) -> Unit
): Later<T> = whenCompleteAsync({ value, error ->
    if(error != null) {
        cleanUp(Failure(error))
    } else {
        cleanUp(Success(value as T))
    }
}, executor)

actual fun <T> Later<T>.finally(
    cleanUp: (state: Result<T>) -> Unit
): Later<T> = whenCompleteAsync { value, error ->
    if(error != null) {
        cleanUp(Failure(error))
    } else {
        cleanUp(Success(value as T))
    }
}