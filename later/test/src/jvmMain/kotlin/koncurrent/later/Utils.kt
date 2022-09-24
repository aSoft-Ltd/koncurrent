package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

actual inline fun Later<Any?>.test(): LaterTestResult {
    toCompletable().get()
}