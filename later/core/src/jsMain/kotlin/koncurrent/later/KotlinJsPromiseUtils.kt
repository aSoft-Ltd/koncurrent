package koncurrent.later

import koncurrent.Later
import kotlin.js.Promise

fun <T> Later<T>.toJsPromise(): Promise<T> = asDynamic().promise ?: Promise<T> { resolve, reject ->
    then(onResolved = { resolve(it) }, onRejected = { reject(it) })
}.apply { asDynamic().promise = this }

fun <T> Promise<T>.asLater(): Later<T> = asDynamic().later ?: Later<T> { resolve, reject ->
    then(onFulfilled = { resolve(it) }, onRejected = { reject(it) })
}.apply { asDynamic().later = this }

