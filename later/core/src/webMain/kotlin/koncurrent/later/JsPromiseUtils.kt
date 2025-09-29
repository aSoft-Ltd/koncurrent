package koncurrent.later

import koncurrent.Later
import kotlin.js.JsAny
import kotlin.js.JsPromiseError
import kotlin.js.Promise
import koncurrent.Promise as KPromise

inline fun <T : JsAny> Later<T>.toJsPromise(): Promise<T> = Promise { resolve, reject ->
    then(resolve).catch { reject(it as JsPromiseError) }
}

inline fun <T : JsAny> Promise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then { resolve(it) as JsAny }.catch { reject(Throwable("$it")) as JsAny }
}

inline fun <T : JsAny> KPromise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then(onFulfilled = { resolve(it) as JsAny }, onRejected = { reject(Throwable("$it")) as JsAny })
}

