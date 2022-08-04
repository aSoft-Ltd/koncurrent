package koncurrent.pending

import koncurrent.*
import koncurrent.pending.internal.rejectFn
import koncurrent.pending.internal.resolveFn
import koncurrent.pending.internal.state

actual inline fun <T, R> Pending<out T>.then(executor: Executor, noinline onResolved: ((T) -> R)) = then(onFulfilled = onResolved)

actual inline fun <T, R> Pending<out T>.then(noinline onResolved: ((T) -> R)) = then(onFulfilled = onResolved)

actual inline fun <T> Pending<out T>.catch(noinline onRejected: (Throwable) -> T): Pending<out T> = (this as Pending<T>).catch(onRejected = onRejected)

actual inline fun <T> Pending<out T>.catch(executor: Executor, noinline onRejected: (Throwable) -> T): Pending<out T> = catch(onRejected)

actual inline fun <T> Pending<out T>.complete(executor: Executor, noinline finalizer: (Settled<T>) -> Unit): Pending<out T> {
    then(
        onFulfilled = { finalizer(Fulfilled(it)) },
        onRejected = { finalizer(Rejected(it)) }
    )
    return this
}

actual inline fun <T> Pending<out T>.complete(noinline finalizer: (Settled<T>) -> Unit): Pending<out T> {
    then(
        onFulfilled = { finalizer(Fulfilled(it)) },
        onRejected = { finalizer(Rejected(it)) }
    )
    return this
}

actual inline fun <T> Pending<out T>.finally(executor: Executor, noinline finalizer: () -> Unit): Pending<out T> = finally(finalizer)

actual inline fun <T> Pending<out T>.finally(noinline finalizer: () -> Unit): Pending<out T> = finally(finalizer)

actual inline fun <T> Pending<out T>.resolveWith(value: T): Boolean {
    val s = state ?: return false
    if (s is PendingState) {
        val r = resolveFn ?: return false
        r(value)
        state = Fulfilled(value)
        return true
    }
    return false
}

actual inline fun <T> Pending<out T>.rejectWith(exception: Throwable): Boolean {
    val s = state ?: return false
    if (s is PendingState) {
        val r = rejectFn ?: return false
        r(exception)
        state = Rejected(exception)
        return true
    }
    return false
}

actual inline fun <T, R> Pending<out T>.flatten(
    noinline onFulfilled: (T) -> Pending<out R>
): Pending<out R> = then(onFulfilled = onFulfilled).unsafeCast<Pending<R>>()