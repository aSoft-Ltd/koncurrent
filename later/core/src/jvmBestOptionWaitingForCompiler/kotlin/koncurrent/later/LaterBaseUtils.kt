@file:Suppress("NOTHING_TO_INLINE")

package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Executor
import koncurrent.Later
import java.util.concurrent.CompletableFuture
import java.util.concurrent.CompletionStage

actual inline fun <T, R> Later<T>.then(executor: Executor, noinline onResolved: (T) -> R): Later<R> = thenApplyAsync(onResolved, executor)

actual inline fun <T, R> Later<T>.andThen(executor: Executor, noinline onResolved: (T) -> Later<R>): Later<R> = thenComposeAsync({ onResolved(it) }, executor)

actual inline fun <T> Later<T>.catch(executor: Executor, noinline recover: (Throwable) -> T): Later<T> {
    this as CompletableFuture<T>
    return exceptionallyAsync({ recover(it) }, executor)
}

actual inline fun <T> Later<T>.finally(executor: Executor, crossinline cleanUp: (state: Result<T>) -> Unit): Later<T> = whenComplete { value, error ->
    when {
        value != null -> cleanUp(Success(value as T))
        error != null -> cleanUp(Failure(error))
        else /* value == null && err == null */ -> {
            val message = "Completable future didn't return with value or exception"
            cleanUp(Failure(IllegalStateException(message)))
        }
    }
}
