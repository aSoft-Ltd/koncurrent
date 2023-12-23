@file:JvmName("BaseUtilsCommon") @file:Suppress("NOTHING_TO_INLINE")

package koncurrent.later

import kase.Result
import koncurrent.Executor
import koncurrent.Later
import koncurrent.awaited.andThen
import koncurrent.awaited.catch
import koncurrent.awaited.finally
import koncurrent.awaited.then
import kotlin.jvm.JvmName

actual inline fun <T, R> Later<T>.then(executor: Executor, noinline onResolved: (T) -> R): Later<R> = then(executor, onResolved)

actual inline fun <T, R> Later<T>.andThen(executor: Executor, noinline onResolved: (T) -> Later<R>): Later<R> = andThen(executor, onResolved)

actual inline fun <T> Later<T>.catch(executor: Executor, noinline recover: (Throwable) -> T): Later<T> = catch(executor, recover)

actual inline fun <T> Later<T>.finally(executor: Executor, noinline cleanUp: (state: Result<T>) -> Unit): Later<T> = finally(executor, cleanUp)