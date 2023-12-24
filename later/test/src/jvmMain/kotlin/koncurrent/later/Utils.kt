@file:Suppress("ACTUAL_WITHOUT_EXPECT")
package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

actual inline fun Later<out Any?>.test(): LaterTestResult {
    toCompletableFuture().get()
    Unit
}