package koncurrent.later

import koncurrent.Later
import kotlin.js.Promise

inline fun <T> Later<T>.toJsPromise(): Promise<T> = unsafeCast<Promise<T>>()

inline fun <T> Promise<T>.asLater(): Later<T> = unsafeCast<Later<T>>()

