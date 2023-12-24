package koncurrent.later

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
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

actual inline fun Later<out Any?>.test(): LaterTestResult = GlobalScope.promise { await() }