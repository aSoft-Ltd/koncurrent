package koncurrent.later

import koncurrent.Later
import koncurrent.Promise

fun <T> Later<T>.toPromise(): Promise<T> = Promise { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}

fun <T> Promise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}