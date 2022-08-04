@file:JvmName("UtilsJvm") @file:Suppress("NOTHING_TO_INLINE")

package koncurrent.pending

import koncurrent.*
import java.util.function.BiConsumer

actual inline fun <T, R> Pending<out T>.then(
    executor: Executor, noinline onResolved: ((T) -> R)
): Pending<out R> = thenApplyAsync(onResolved, executor)

actual inline fun <T, R> Pending<out T>.then(noinline onResolved: ((T) -> R)): Pending<out R> = thenApplyAsync(onResolved)

actual inline fun <T> Pending<out T>.catch(executor: Executor, noinline onRejected: (Throwable) -> T): Pending<out T> = (this as Pending<T>).exceptionallyAsync(onRejected, executor)

actual inline fun <T> Pending<out T>.catch(noinline onRejected: (Throwable) -> T): Pending<out T> = (this as Pending<T>).exceptionally(onRejected)

@PublishedApi
internal inline fun <T> completeConsumer(
    noinline finalizer: (Settled<T>) -> Unit
): BiConsumer<T?, Throwable?> = BiConsumer { value, error ->
    when {
        value != null -> finalizer(Fulfilled(value))
        error != null -> finalizer(Rejected(error))
        else /* value == null && err == null */ -> finalizer(Rejected(IllegalStateException("Completable future didn't return with value or exception")))
    }
}

actual inline fun <T> Pending<out T>.complete(executor: Executor, noinline finalizer: (Settled<T>) -> Unit) = whenCompleteAsync(completeConsumer(finalizer), executor)

actual inline fun <T> Pending<out T>.complete(noinline finalizer: (Settled<T>) -> Unit) = whenCompleteAsync(completeConsumer(finalizer))

actual inline fun <T> Pending<out T>.finally(executor: Executor, noinline finalizer: () -> Unit): Pending<out T> = whenCompleteAsync({ _, _ -> finalizer() }, executor)

actual inline fun <T> Pending<out T>.finally(noinline finalizer: () -> Unit): Pending<out T> = whenComplete { _, _ -> finalizer() }

actual inline fun <T> Pending<out T>.resolveWith(value: T) = (this as Pending<T>).complete(value)

actual inline fun <T> Pending<out T>.rejectWith(exception: Throwable) = completeExceptionally(exception)

actual inline fun <T, R> Pending<out T>.flatten(noinline onFulfilled: (T) -> Pending<out R>): Pending<out R> = thenCompose { onFulfilled(it) }