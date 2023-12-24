@file:Suppress("FunctionName")

package koncurrent

import kase.Executing
import kase.ExecutorState
import kase.Failure
import kase.Result
import kase.Success
import kase.toExecutorState
import kollections.List
import kollections.all
import kollections.associate
import kollections.emptyList
import kollections.filterIsInstance
import kollections.forEach
import kollections.keys
import kollections.set
import kollections.toMutableMap
import kollections.values
import koncurrent.later.filterSuccess
import koncurrent.later.finally
import koncurrent.later.mapValues
import koncurrent.later.then
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock

inline fun <T> T.toLater(
    executor: Executor = Executors.current()
) = SuccessfulLater(this, executor)

inline fun <T> Later(
    value: T,
    executor: Executor = Executors.current()
) = SuccessfulLater(value, executor)

inline fun FailedLater(
    message: String,
    executor: Executor = Executors.current()
) = FailedLater(RuntimeException(message), executor)

inline fun TODOLater(
    message: String = "Not implemented",
    executor: Executor = Executors.current()
) = FailedLater(NotImplementedError(message), executor)

inline fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }

fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
    list.mapValues()
}

private val lock: ReentrantLock = reentrantLock()
fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
    val executor = Executors.default()
    val later = PendingLater<List<Result<T>>>(executor)
    if (laters.isEmpty()) {
        later.resolveWith(emptyList())
        return later
    }
    val inputs = laters.associate { it to (Executing() as ExecutorState<T>) }.toMutableMap()
    inputs.keys.forEach { l ->
        l.finally(executor) { res ->
            lock.withLock {
                inputs[l] = res.toExecutorState()
                if (inputs.values.all { it is Success || it is Failure }) {
                    later.resolveWith(inputs.values.filterIsInstance<Result<T>>())
                }
            }
        }
    }
    return later
}