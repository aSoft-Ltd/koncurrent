package koncurrent.later

import koncurrent.Later
import koncurrent.Promise

inline fun <T> Later<T>.toPromise(): Promise<T> = unsafeCast<Promise<T>>()

inline fun <T> Promise<T>.asLater(): Later<T> = unsafeCast<Later<T>>()