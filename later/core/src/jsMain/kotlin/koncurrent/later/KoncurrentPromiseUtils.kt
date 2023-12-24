package koncurrent.later

import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import koncurrent.Promise

inline fun <T> Later<T>.toPromise(): Promise<T> = unsafeCast<Promise<T>>()

inline fun <T> Promise<T>.asLater(): Later<T> = unsafeCast<Later<T>>()