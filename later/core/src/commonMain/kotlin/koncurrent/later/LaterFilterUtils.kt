@file:JvmName("FilterUtilsCommon")

package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import kollections.List
import kollections.toIList
import koncurrent.Later
import kotlin.jvm.JvmName

@JvmName("filterSuccessFromResult")
inline fun <T> List<Result<T>>.filterSuccess(): List<Success<T>> = filterIsInstance<Success<T>>().toIList()

@JvmName("filterSuccessValuesFromResult")
inline fun <T> List<Result<T>>.filterSuccessValues(): List<T> = filterSuccess().filterSuccessValues()

@JvmName("filterSuccessValuesFromSuccess")
inline fun <T> List<Success<T>>.filterSuccessValues(): List<T> = map { it.data }.toIList()

@JvmName("filterRejectedFromResult")
inline fun <T> List<Result<T>>.filterRejected(): List<Failure<T>> = filterIsInstance<Failure<T>>().toIList()

@JvmName("filterSuccessFromLater")
inline fun <T> Later<List<Result<T>>>.filterFulfilled() = then { it.filterSuccess() }

@JvmName("filterRejectedFromLater")
inline fun <T> Later<List<Result<T>>>.filterRejected() = then { it.filterRejected() }