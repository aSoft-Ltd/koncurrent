package koncurrent.later

import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import koncurrent.Promise

fun <T> Later<T>.toPromise(): Promise<T> = Promise { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}

fun <T> Promise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}