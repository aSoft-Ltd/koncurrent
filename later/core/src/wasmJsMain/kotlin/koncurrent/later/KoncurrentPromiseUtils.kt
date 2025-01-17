package koncurrent.later

import koncurrent.Later
import kotlin.js.Promise

inline fun <T : JsAny> Later<T>.toPromise(): Promise<T> = toJsPromise()