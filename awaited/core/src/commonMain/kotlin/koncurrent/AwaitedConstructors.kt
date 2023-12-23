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
import koncurrent.awaited.filterSuccess
import koncurrent.awaited.finally
import koncurrent.awaited.mapValues
import kotlinx.atomicfu.locks.ReentrantLock
import kotlinx.atomicfu.locks.reentrantLock
import kotlinx.atomicfu.locks.withLock
import kotlinx.JsExport
import kotlin.js.JsName

inline fun <T> awaited(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Awaited<T> = MutableAwaited(handler, executor)

@JsExport
@JsName("mutableAwaited")
inline fun <T> MutableAwaited(executor: Executor = Executors.current()): MutableAwaited<T> = MutableAwaited(executor = executor, handler = null)

inline fun <T> Executor.awaited(noinline builder: ProgressPublisher.() -> T): Awaited<T> {
    val l = MutableAwaited<T>(executor = this)
    execute {
        try {
            l.resolveWith(builder(l))
        } catch (err: Throwable) {
            l.rejectWith(err)
        }
    }
    return l
}

@JsName("wrapInAwaited")
inline fun <T> T.toAwaited(
    executor: Executor = Executors.current()
): Awaited<T> = awaited(this, executor)

@JsExport
@JsName("awaitedOf")
inline fun <T> awaited(
    value: T,
    executor: Executor = Executors.current()
): Awaited<T> = SuccessfulAwaited(value, executor)

fun <T> SuccessfulAwaited(
    value: T,
    executor: Executor = Executors.current()
): Awaited<T> = MutableAwaited<T>(executor).apply {
    resolveWith(value)
}

@JsExport
@JsName("FailedAwaitedWithMessage")
@JvmOverloads
fun FailedAwaited(
    message: String,
    executor: Executor = Executors.current()
): Awaited<Nothing> = FailedAwaited(RuntimeException(message), executor)

@JsExport
@JvmOverloads
fun FailedAwaited(
    error: Throwable,
    executor: Executor = Executors.current()
): Awaited<Nothing> = MutableAwaited<Nothing>(executor).apply {
    rejectWith(error)
}

@JsExport
@JvmOverloads
fun TODOAwaited(
    message: String = "Not implemented",
    executor: Executor = Executors.current()
): Awaited<Nothing> = MutableAwaited<Nothing>(executor).apply {
    rejectWith(NotImplementedError(message))
}

fun <T> SuccessfulAllAwaited(vararg them: Awaited<T>): Awaited<List<Success<T>>> = allAwaited(*them).then { it.filterSuccess() }

fun <T> SuccessfulAwaitedValues(vararg them: Awaited<T>): Awaited<List<T>> = SuccessfulAllAwaited(*them).then { list ->
    list.mapValues()
}


private val lock: ReentrantLock = reentrantLock()
fun <T> allAwaited(vararg them: Awaited<T>): Awaited<List<Result<T>>> {
    val awaited = MutableAwaited<List<Result<T>>>(executor = Executors.current())
    if (them.isEmpty()) {
        awaited.resolveWith(emptyList())
        return awaited
    }
    val inputs = them.map { it as MutableAwaited }
    var resolved = false
    inputs.forEach { l ->
        l.finally(Executors.current()) {
            if (!resolved) lock.withLock {
                val states = inputs.map { it.state }
                if (states.all { it is Result<Any?> }) {
                    resolved = true
                    val stateList = states.filterIsInstance<Result<T>>()
                    awaited.resolveWith(stateList)
                }
            }
        }
    }
    return awaited
}