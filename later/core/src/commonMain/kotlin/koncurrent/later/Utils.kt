@file:JvmName("UtilsCommon")

package koncurrent.later

import kotlinx.collections.interoperable.List
import koncurrent.*
import kotlinx.collections.interoperable.toInteroperableList
import kotlin.jvm.JvmName
import kotlin.jvm.JvmSynthetic

inline fun <T, R> Later<out T>.then(
    executor: Executor = this.executor,
    noinline onFulfilled: (T) -> R
): Later<out R> = then(onFulfilled, null, executor)

inline fun <T> Later<out T>.catch(
    executor: Executor = this.executor,
    noinline handler: (Throwable) -> T
): Later<out T> = then(null, handler, executor)

fun <T> Later<out T>.finally(
    executor: Executor = this.executor,
    cleanUp: (state: Settled<T>) -> Unit
) = cleanUp(executor = executor, cleanUp = cleanUp)

fun <T, R> Later<out T>.flatten(
    executor: Executor = this.executor,
    onResolved: (T) -> Later<out R>
): Later<out R> = flatten(onResolved, executor)

inline fun <T> Later<out Later<out T>>.flatten(executor: Executor = this.executor): Later<out T> = flatten(executor) { it }

@JvmName("filterFulfilledFromSettled")
inline fun <T> List<Settled<T>>.filterFulfilled(): List<Fulfilled<T>> = filterIsInstance<Fulfilled<T>>().toInteroperableList()

@JvmName("filterFulfilledValuesFromSettled")
inline fun <T> List<Settled<T>>.filterFulfilledValues(): List<T> = filterFulfilled().filterFulfilledValues()

@JvmName("filterFulfilledValuesFromFulfilled")
inline fun <T> List<Fulfilled<T>>.filterFulfilledValues(): List<T> = map { it.value }.toInteroperableList()

@JvmName("filterRejectedFromSettled")
inline fun <T> List<Settled<T>>.filterRejected(): List<Rejected> = filterIsInstance<Rejected>().toInteroperableList()

@JvmName("filterFulfilledFromLater")
inline fun <T> Later<out List<Settled<T>>>.filterFulfilled() = then { it.filterFulfilled() }

@JvmName("filterRejectedFromLater")
inline fun <T> Later<out List<Settled<T>>>.filterRejected() = then { it.filterRejected() }