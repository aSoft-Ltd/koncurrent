@file:Suppress("ACTUAL_WITHOUT_EXPECT", "EXPECT_ACTUAL_INCOMPATIBILITY")

package koncurrent.later

import kase.Failure
import kase.Success
import koncurrent.Later
import koncurrent.Promise

actual inline fun Later<out Any?>.test(): dynamic = Promise { resolve, reject ->
    finally { res ->
        when (res) {
            is Failure -> reject(res.cause)
            is Success -> resolve(res.data)
        }
    }
}