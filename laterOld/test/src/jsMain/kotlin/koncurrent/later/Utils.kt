@file:Suppress("ACTUAL_WITHOUT_EXPECT", "EXPECT_ACTUAL_INCOMPATIBILITY")

package koncurrent.later

import kase.Failure
import kase.Success
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch
import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catchTestResult
import koncurrent.Promise

actual inline fun Later<Any?>.test(): dynamic = Promise { resolve, reject ->
    complete { res ->
        when (res) {
            is Failure -> reject(res.cause)
            is Success -> resolve(res.data)
        }
    }
}