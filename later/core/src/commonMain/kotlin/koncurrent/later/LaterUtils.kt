@file:JvmName("UtilsCommon")

package koncurrent.later

import kotlinx.collections.interoperable.List
import koncurrent.*
import kotlinx.collections.interoperable.toInteroperableList
import kotlin.jvm.JvmName

inline fun <T, R> Later<T>.then(
    executor: Executor,
    noinline onFulfilled: (T) -> R
): Later<R> = then(onFulfilled, null, executor)

inline fun <T> Later<T>.catch(
    executor: Executor,
    noinline handler: (Throwable) -> T
): Later<T> = then(null, handler, executor)

inline fun <T> Later<T>.catch(
    noinline handler: (Throwable) -> T
): Later<T> = then(null, handler)

fun <T> Later<T>.finally(
    executor: Executor,
    cleanUp: (state: Settled<T>) -> Unit
) = complete(cleanUp, executor)

fun <T> Later<T>.finally(
    cleanUp: (state: Settled<T>) -> Unit
) = complete(cleanUp)

fun <T, R> Later<T>.andThen(
    executor: Executor,
    onResolved: (T) -> Later<R>
) = andThen(onResolved, executor)

@Deprecated("In favour of andThen", ReplaceWith("andThen(onResolved, executor)"))
fun <T, R> Later<T>.flatten(
    executor: Executor,
    onResolved: (T) -> Later<R>
) = andThen(onResolved, executor)

inline fun <T> Later<Later<T>>.flatten(executor: Executor): Later<T> = andThen(executor) { it }

inline fun <T> Later<Later<T>>.flatten(): Later<T> = andThen { it }

@JvmName("filterFulfilledFromSettled")
inline fun <T> List<Settled<T>>.filterFulfilled(): List<Fulfilled<T>> = filterIsInstance<Fulfilled<T>>().toInteroperableList()

@JvmName("filterFulfilledValuesFromSettled")
inline fun <T> List<Settled<T>>.filterFulfilledValues(): List<T> = filterFulfilled().filterFulfilledValues()

@JvmName("filterFulfilledValuesFromFulfilled")
inline fun <T> List<Fulfilled<T>>.filterFulfilledValues(): List<T> = map { it.value }.toInteroperableList()

@JvmName("filterRejectedFromSettled")
inline fun <T> List<Settled<T>>.filterRejected(): List<Rejected> = filterIsInstance<Rejected>().toInteroperableList()

@JvmName("filterFulfilledFromLater")
inline fun <T> Later<List<Settled<T>>>.filterFulfilled() = then { it.filterFulfilled() }

@JvmName("filterRejectedFromLater")
inline fun <T> Later<List<Settled<T>>>.filterRejected() = then { it.filterRejected() }