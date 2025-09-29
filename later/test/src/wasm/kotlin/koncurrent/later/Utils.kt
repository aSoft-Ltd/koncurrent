package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.internal.TestPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

actual inline fun Later<Any?>.test(): TestPromise = GlobalScope.promise { await() }.unsafeCast()