@file:Suppress("FunctionName", "NON_EXPORTABLE_TYPE")

package koncurrent

import kase.progress.ProgressPublisher
import kase.Result
import kase.Success
import kotlin.jvm.JvmOverloads
import kollections.List
import kollections.toIList
import koncurrent.later.filterSuccess
import koncurrent.later.finally
import koncurrent.later.mapValues
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlin.js.JsExport
import kotlin.js.JsName

inline fun <T> Later(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = LaterPromise(handler, executor)

@JsExport
@JsName("pendingLater")
inline fun <T> PendingLater(executor: Executor = SynchronousExecutor): PendingLater<T> = LaterPromise(executor = executor)

inline fun <T> Executor.later(noinline builder: ProgressPublisher.() -> T): Later<T> {
    val l = PendingLater<T>(executor = this)
    execute {
        try {
            l.resolveWith(builder(l))
        } catch (err: Throwable) {
            l.rejectWith(err)
        }
    }
    return l
}

@JsExport
@JsName("laterOf")
inline fun <T> Later(
    value: T,
    executor: Executor = SynchronousExecutor
): Later<T> = SuccessfulLater(value, executor)

fun <T> SuccessfulLater(
    value: T,
    executor: Executor = SynchronousExecutor
): Later<T> = PendingLater<T>(executor).apply {
    resolveWith(value)
}

@JsExport
@JvmOverloads
fun FailedLater(
    error: Throwable,
    executor: Executor = SynchronousExecutor
): Later<Nothing> = PendingLater<Nothing>(executor).apply {
    rejectWith(error)
}

fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }

fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
    list.mapValues()
}


private val lock: ReentrantLock = reentrantLock()
fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
    val inputs = laters.map { it as LaterPromise }
    val later = LaterPromise<List<Result<T>>>(executor = SynchronousExecutor)
    var resolved = false
    inputs.forEach { l ->
        l.finally(SynchronousExecutor) {
            if (!resolved) lock.withLock {
                val states = inputs.map { it.state }
                if (states.all { it is Result<*> }) {
                    resolved = true
                    val stateList = states.filterIsInstance<Result<T>>().toIList()
                    later.resolveWith(stateList)
                }
            }
        }
    }
    return later
}