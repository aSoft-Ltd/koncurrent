package koncurrent.later

import koncurrent.Later
import kotlin.js.Promise

fun <T> Later<T>.toJsPromise(): Promise<T> = Promise { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}

fun <T> Promise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}

