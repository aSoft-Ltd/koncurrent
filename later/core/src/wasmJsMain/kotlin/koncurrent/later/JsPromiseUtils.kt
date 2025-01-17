package koncurrent.later

import koncurrent.Later
import kotlin.js.Promise

inline fun <T : JsAny> Later<T>.toJsPromise(): Promise<T> = Promise { resolve, reject -> then(resolve).catch { reject(it as JsAny) } }

inline fun <T : JsAny> Promise<T>.asLater(): Later<T> = Later { resolve, reject ->
    then { resolve(it) as JsAny }.catch { reject(Throwable("$it")) as JsAny }
}

