@file:Suppress(
    "FunctionName",
    "Since15",
    "NOTHING_TO_INLINE",
    "ACTUAL_WITHOUT_EXPECT"
)

package koncurrent

import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Result
import kase.Success
import kase.progress.ProgressBus
import kase.progress.ProgressPublisher
import kase.progress.VoidProgressBus
import kase.toExecutorState
import kollections.all
import kollections.associate
import kollections.List
import kollections.Collection
import kollections.emptyList
import kollections.filterIsInstance
import kollections.set
import kollections.toMutableMap
import koncurrent.later.finally
import koncurrent.later.filterSuccess
import koncurrent.later.mapValues
import koncurrent.later.then
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import java.util.concurrent.CompletableFuture

actual inline fun <T> Later(
    executor: Executor,
    crossinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> {
    val future = CompletableFuture<T>()
    executor.execute {
        try {
            handler({
                future.complete(it)
            }, {
                future.completeExceptionally(it)
            })
        } catch (err: Throwable) {
            future.completeExceptionally(err)
        }
    }
    return future
}

actual inline fun <T> PendingLater(executor: Executor) = CompletableFuture<T>()

actual fun <T> Executor.later(bus: ProgressBus = VoidProgressBus, builder: ProgressPublisher.() -> T): Later<T> {
    val future = CompletableFuture<T>()
    execute {
        try {
            future.complete(builder(bus))
        } catch (err: Throwable) {
            future.completeExceptionally(err)
        }
    }
    return future
}


actual inline fun <T> SuccessfulLater(
    value: T,
    executor: Executor
): Later<T> = CompletableFuture.supplyAsync({ value }, executor)

actual inline fun FailedLater(
    error: Throwable,
    executor: Executor
): Later<Nothing> = CompletableFuture.failedFuture(error)


actual fun <T> Laters(them: Collection<Later<T>>) : Later<List<Result<T>>> = Laters(*them.toList().toTypedArray())

private val lock: ReentrantLock = reentrantLock()
actual fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
    val executor = Executors.default()
    val future = CompletableFuture<List<Result<T>>>()
    if (laters.isEmpty()) {
        future.complete(emptyList())
        return future as Later<List<Result<T>>>
    }
    val inputs = laters.associate { it to (Executing() as ExecutorState<T>) }.toMutableMap()
    inputs.keys.forEach { l ->
        l.finally(executor) { res ->
            lock.withLock {
                val state = res.toExecutorState()
                inputs[l] = state
                if (inputs.values.all { it is Success || it is Failure }) {
                    future.complete(inputs.values.filterIsInstance<Result<T>>())
                }
            }
        }
    }
    return future as Later<List<Result<T>>>
}

actual inline fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }

actual inline fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
    list.mapValues()
}