@file:Suppress("ACTUAL_WITHOUT_EXPECT", "EXPECT_ACTUAL_INCOMPATIBILITY")

package koncurrent.awaited

import kase.Failure
import kase.Success
import koncurrent.Awaited
import koncurrent.internal.TestPromise
import kotlin.js.Promise

actual inline fun Awaited<Any?>.test(): TestPromise = Promise { resolve, reject ->
    complete { res ->
        when (res) {
            is Failure -> reject(res.cause)
            is Success -> resolve(res.data)
        }
    }
}.unsafeCast<TestPromise>()