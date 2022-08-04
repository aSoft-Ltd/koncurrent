@file:JvmName("UtilsCommon")

package koncurrent.pending

import koncurrent.Executor
import koncurrent.Pending
import koncurrent.Settled
import kotlin.jvm.JvmName

expect inline fun <T, R> Pending<out T>.then(executor: Executor, noinline onResolved: ((T) -> R)): Pending<out R>

expect inline fun <T, R> Pending<out T>.then(noinline onResolved: (T) -> R): Pending<out R>

expect inline fun <T> Pending<out T>.catch(noinline onRejected: (Throwable) -> T): Pending<out T>

expect inline fun <T> Pending<out T>.catch(executor: Executor, noinline onRejected: (Throwable) -> T): Pending<out T>

expect inline fun <T> Pending<out T>.complete(executor: Executor, noinline finalizer: (Settled<T>) -> Unit): Pending<out T>

expect inline fun <T> Pending<out T>.complete(noinline finalizer: (Settled<T>) -> Unit): Pending<out T>

expect inline fun <T> Pending<out T>.finally(executor: Executor, noinline finalizer: () -> Unit): Pending<out T>

expect inline fun <T> Pending<out T>.finally(noinline finalizer: () -> Unit): Pending<out T>

expect inline fun <T> Pending<out T>.resolveWith(value: T): Boolean

expect inline fun <T> Pending<out T>.rejectWith(exception: Throwable): Boolean

expect inline fun <T, R> Pending<out T>.flatten(noinline onFulfilled: (T) -> Pending<out R>): Pending<out R>

inline fun <T> Pending<Pending<out T>>.flatten(): Pending<out T> = flatten { it }