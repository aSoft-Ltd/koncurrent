package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

actual inline fun Later<out Any?>.test(): LaterTestResult {
    toPending().get()
}