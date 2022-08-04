package koncurrent.pending

import koncurrent.Pending
import koncurrent.promise.await

actual suspend inline fun <T> Pending<out T>.await(): T = await()

actual suspend inline fun <T> Pending<out Pending<out T>>.awaitChain(): T = unsafeCast<Pending<T>>().await()