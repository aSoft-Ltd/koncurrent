@file:Suppress("FunctionName", "NOTHING_TO_INLINE")

package koncurrent

import koncurrent.pending.internal.rejectFn
import koncurrent.pending.internal.resolveFn
import koncurrent.pending.internal.state

@PublishedApi
internal inline fun <T> pendingCreator(resolve: (T) -> Unit, reject: (Throwable) -> Unit, block: () -> T) {
    try {
        resolve(block())
    } catch (err: Throwable) {
        reject(err)
    }
}

actual inline fun <T> Executor.pending(noinline block: () -> T): Pending<out T> = Promise<T> { resolve, reject ->
    pendingCreator(resolve, reject, block)
}

actual inline fun <T> pending(noinline block: () -> T): Pending<out T> = Promise { resolve, reject ->
    pendingCreator(resolve, reject, block)
}

actual inline fun <T> ResolvedPending(value: T): Pending<out T> = Promise.resolve(value)

actual inline fun <T> RejectedPending(error: Throwable): Pending<out T> = Promise.reject(error) as Pending<out T>

actual inline fun <T> ControlledPending(): Pending<out T> {
    var resolveFn: ((T) -> Unit)? = null
    var rejectFn: ((Throwable) -> Unit)? = null
    val promise = Promise<T> { resolve, reject ->
        resolveFn = resolve
        rejectFn = reject
    }
    promise.resolveFn = resolveFn
    promise.rejectFn = rejectFn
    promise.state = PendingState
    return promise
}