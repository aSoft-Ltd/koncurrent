@file:JvmName("PendingCoroutineUtilsCommon")

package koncurrent.pending

import koncurrent.*
import kotlin.jvm.JvmName

expect suspend fun <T> Pending<out T>.await(): T

expect suspend inline fun <T> Pending<out Pending<out T>>.awaitChain(): T

suspend inline fun <reified T, R> Pending<out T>.map(transform: (T) -> R): Pending<out R> {
    val pending = ControlledPending<R>()
    try {
        pending.resolveWith(transform(await()))
    } catch (err: Throwable) {
        pending.rejectWith(err)
    }
    return pending
}

suspend inline fun <reified T> Pending<out T>.exception(transform: (Throwable) -> T): Pending<out T> {
    val pending = ControlledPending<T>()
    try {
        pending.resolveWith(await())
    } catch (err: Throwable) {
        try {
            pending.resolveWith(transform(err))
        } catch (err: Throwable) {
            pending.rejectWith(err)
        }
    }
    return pending
}

suspend inline fun <reified T> Pending<out T>.collect(collector: (T) -> Unit) = collector(await())

suspend inline fun <reified T, R> Pending<out T>.collectTo(collector: (T) -> R): R = collector(await())