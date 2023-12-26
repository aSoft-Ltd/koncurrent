@file:Suppress(
//    "ACTUAL_WITHOUT_EXPECT",
    "NOTHING_TO_INLINE",
    "Since15",
//    "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE"
)

package koncurrent

import kase.Failure
import kase.Result
import kase.Success
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executor

actual class PendingLater<T>(
    @PublishedApi
    internal val executor: Executor,
    private val wrapped: CompletableFuture<T>
) : CompletableFuture<T>(), Later<T> {
    fun <R> then(executor: Executor = this.executor, onResolve: (T) -> R) = PendingLater(
        executor,
        wrapped = wrapped.thenApplyAsync(onResolve, executor)
    )

    fun <R> andThen(executor: Executor = this.executor, onResolve: (T) -> Later<R>) = PendingLater(
        executor,
        wrapped = wrapped.thenComposeAsync(onResolve, executor)
    )

    fun catch(executor: Executor = this.executor, onRejected: (Throwable) -> T) = PendingLater(
        executor,
        wrapped = wrapped.exceptionallyAsync(onRejected, executor)
    )

    fun finally(executor: Executor = this.executor, cleanUp: (state: Result<T>) -> Unit): PendingLater<T> {
        whenCompleteAsync({ value, error ->
            when {
                value != null -> cleanUp(Success(value as T))
                error != null -> cleanUp(Failure(error))
                else /* value == null && err == null */ -> {
                    val message = "Completable future didn't return with value or exception"
                    cleanUp(Failure(IllegalStateException(message)))
                }
            }
        }, executor)
        return this
    }

    companion object {
        fun <T> successful(
            executor: Executor = Executors.current(),
            value: T
        ): PendingLater<T> = PendingLater(executor, completedFuture(value))

        fun <T> failed(
            executor: Executor = Executors.current(),
            err: Throwable,
        ): PendingLater<T> = PendingLater(executor, failedFuture(err))
    }
}

actual inline fun <T> PendingLater<T>.resolveWith(value: T) = complete(value)

actual inline fun <T> PendingLater<T>.rejectWith(error: Throwable) = completeExceptionally(error)