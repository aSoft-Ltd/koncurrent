package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

expect inline fun Later<out Any?>.test(): LaterTestResult