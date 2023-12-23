package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.MutablePromise
import koncurrent.awaited
import koncurrent.Promise

fun <T> Awaited<T>.toPromise(): Promise<T> = MutablePromise { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}

fun <T> Promise<T>.toAwaited(): Awaited<T> = awaited { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}