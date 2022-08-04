package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.Promise

actual inline fun Later<out Any?>.test(): dynamic {
    return Promise<Unit> { resolve, reject ->
        then({ resolve(Unit) }, reject)
    }.unsafeCast<LaterTestResult>()
}