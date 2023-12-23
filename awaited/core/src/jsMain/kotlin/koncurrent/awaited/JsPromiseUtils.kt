package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.awaited
import kotlin.js.Promise

fun <T> Awaited<T>.toJsPromise(): Promise<T> = Promise { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}

fun <T> Promise<T>.toAwaited(): Awaited<T> = awaited { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}