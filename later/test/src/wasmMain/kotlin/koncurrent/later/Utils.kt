package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

actual inline fun Later<out Any?>.test(): LaterTestResult = GlobalScope.promise { await() }