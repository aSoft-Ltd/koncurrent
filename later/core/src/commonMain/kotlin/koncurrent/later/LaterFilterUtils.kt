@file:JvmName("FilterUtilsCommon")

package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import kollections.List
import kollections.filterIsInstance
import kollections.map
import koncurrent.Later
import kotlin.jvm.JvmName

@JvmName("filterSuccessFromResult")
inline fun <T> List<Result<T>>.filterSuccess(): List<Success<T>> = filterIsInstance<Success<T>>()

@JvmName("filterSuccessValuesFromResult")
inline fun <T> List<Result<T>>.filterSuccessValues(): List<T> = filterSuccess().mapValues()

@JvmName("filterSuccessValuesFromSuccess")
inline fun <T> List<Success<T>>.mapValues(): List<T> = map { it.data }

@JvmName("filterRejectedFromResult")
inline fun <T> List<Result<T>>.filterRejected(): List<Failure<T>> = filterIsInstance<Failure<T>>()

//@JvmName("filterSuccessFromLater")
//inline fun <T> Later<List<Result<T>>>.filterFulfilled() : Later<List<Success<T>>> {
//    TODO("koncurrent-later-core/commonMain/koncurrent/LaterFilterUtils.kt")
//    return then { it.filterSuccess() }
//}

//@JvmName("filterRejectedFromLater")
//inline fun <T> Later<List<Result<T>>>.filterRejected() : Later<List<Failure<T>>> {
//    TODO("koncurrent-later-core/commonMain/koncurrent/LaterFilterUtils.kt")
////    then { it.filterRejected() }
//}