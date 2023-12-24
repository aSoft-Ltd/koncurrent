package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Executor
import koncurrent.Later

actual fun <T, R> Later<T>.then(executor: Executor,  onResolved: (T) -> R): Later<R> = thenApplyAsync(onResolved, executor)

actual fun <T, R> Later<T>.andThen(executor: Executor,  onResolved: (T) -> Later<R>): Later<R> = thenComposeAsync({ onResolved(it) }, executor)

actual fun <T> Later<T>.catch(executor: Executor,  recover: (Throwable) -> T): Later<T> = exceptionallyAsync(recover, executor)

actual fun <T> Later<T>.finally(executor: Executor, cleanUp: (state: Result<T>) -> Unit): Later<T> = whenComplete { value, error ->
    when {
        value != null -> cleanUp(Success(value as T))
        error != null -> cleanUp(Failure(error))
        else /* value == null && err == null */ -> {
            val message = "Completable future didn't return with value or exception"
            cleanUp(Failure(IllegalStateException(message)))
        }
    }
}
