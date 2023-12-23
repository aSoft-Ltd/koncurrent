@file:Suppress("FunctionName", "NON_EXPORTABLE_TYPE", "NOTHING_TO_INLINE")

package koncurrent

import kase.progress.ProgressPublisher
import kase.Result
import kase.Success
import kotlin.jvm.JvmOverloads
import kollections.List
import kollections.all
import kollections.emptyList
import kollections.filterIsInstance
import kollections.forEach
import kollections.map
import koncurrent.later.filterSuccess
import koncurrent.later.finally
import koncurrent.later.mapValues
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlinx.JsExport
import kotlin.js.JsName

inline fun <T> Later(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<T> = LaterPromise(handler, executor)

@JsExport
@JsName("pendingLater")
inline fun <T> PendingLater(executor: Executor = Executors.current()): PendingLater<T> =
    LaterPromise(executor = executor)

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

@JsName("wrapInLater")
inline fun <T> T.toLater(
    executor: Executor = Executors.current()
) : Later<T> = Later(this,executor)

@JsExport
@JsName("laterOf")
inline fun <T> Later(
    value: T,
    executor: Executor = Executors.current()
): Later<T> = SuccessfulLater(value, executor)

fun <T> SuccessfulLater(
    value: T,
    executor: Executor = Executors.current()
): Later<T> = PendingLater<T>(executor).apply {
    resolveWith(value)
}

@JsExport
@JsName("FailedLaterWithMessage")
@JvmOverloads
fun FailedLater(
    message: String,
    executor: Executor = Executors.current()
): Later<Nothing> = FailedLater(RuntimeException(message),executor)

@JsExport
@JvmOverloads
fun FailedLater(
    error: Throwable,
    executor: Executor = Executors.current()
): Later<Nothing> = PendingLater<Nothing>(executor).apply {
    rejectWith(error)
}

@JsExport
@JvmOverloads
fun TODOLater(
    message: String = "Not implemented",
    executor: Executor = Executors.current()
): Later<Nothing> = PendingLater<Nothing>(executor).apply {
    rejectWith(NotImplementedError(message))
}

fun <T> SuccessfulLaters(vararg laters: Later<T>): Later<List<Success<T>>> = Laters(*laters).then { it.filterSuccess() }

fun <T> SuccessfulLaterValues(vararg laters: Later<T>): Later<List<T>> = SuccessfulLaters(*laters).then { list ->
    list.mapValues()
}


private val lock: ReentrantLock = reentrantLock()
fun <T> Laters(vararg laters: Later<T>): Later<List<Result<T>>> {
    val later = LaterPromise<List<Result<T>>>(executor = Executors.current())
    if(laters.isEmpty()) {
        later.resolveWith(emptyList())
        return later
    }
    val inputs = laters.map { it as LaterPromise }
    var resolved = false
    inputs.forEach { l ->
        l.finally(Executors.current()) {
            if (!resolved) lock.withLock {
                val states = inputs.map { it.state }
                if (states.all { it is Result<Any?> }) {
                    resolved = true
                    val stateList = states.filterIsInstance<Result<T>>()
                    later.resolveWith(stateList)
                }
            }
        }
    }
    return later
}