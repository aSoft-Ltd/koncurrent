package koncurrent.pending

import koncurrent.Executor
import koncurrent.Later
import koncurrent.Pending
import koncurrent.Settled
import koncurrent.later.flatten as laterUnwrap

actual inline fun <T, R> Pending<out T>.then(
    executor: Executor, noinline onResolved: ((T) -> R)
) = then(executor = executor, onResolved = onResolved, onRejected = null)

actual inline fun <T, R> Pending<out T>.then(
    noinline onResolved: ((T) -> R)
) = then(executor = executor, onResolved = onResolved, onRejected = null)

actual inline fun <T> Pending<out T>.catch(
    executor: Executor, noinline onRejected: (Throwable) -> T
): Pending<out T> = error(executor = executor, handler = onRejected)

actual inline fun <T> Pending<out T>.catch(
    noinline onRejected: (Throwable) -> T
): Pending<out T> = error(handler = onRejected)

actual inline fun <T> Pending<out T>.complete(
    executor: Executor, noinline finalizer: (Settled<T>) -> Unit
): Pending<out T> = complete(executor = executor, cleanUp = { finalizer(it) })

actual inline fun <T> Pending<out T>.complete(
    noinline finalizer: (Settled<T>) -> Unit
) = complete(cleanUp = { finalizer(it) })

actual inline fun <T> Pending<out T>.finally(executor: Executor, noinline finalizer: () -> Unit): Pending<out T> = complete(executor) { finalizer() }

actual inline fun <T> Pending<out T>.finally(noinline finalizer: () -> Unit): Pending<out T> = complete { finalizer() }

actual inline fun <T> Pending<out T>.resolveWith(value: T): Boolean = (this as Pending<T>).resolveWith(value)

actual inline fun <T> Pending<out T>.rejectWith(exception: Throwable) = rejectWith(exception)

actual inline fun <T, R> Pending<out T>.flatten(
    noinline onFulfilled: (T) -> Pending<out R>
): Pending<out R> = flatten(onFulfilled)