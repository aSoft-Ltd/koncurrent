@file:Suppress("ACTUAL_WITHOUT_EXPECT", "EXPECT_ACTUAL_INCOMPATIBILITY")

package koncurrent.later

import kase.Failure
import kase.Success
import koncurrent.Later

actual inline fun Later<Any?>.test(): dynamic = Promise { resolve, reject ->
    complete { res ->
        when (res) {
            is Failure -> reject(res.cause)
            is Success -> resolve(res.data)
        }
    }
}