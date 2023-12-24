package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.awaited.test

actual inline fun Later<Any?>.test(): LaterTestResult = test()