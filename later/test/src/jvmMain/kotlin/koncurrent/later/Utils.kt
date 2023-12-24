package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

@Suppress("ACTUAL_WITHOUT_EXPECT")
actual inline fun Later<Any?>.test(): LaterTestResult {
    toCompletableFuture().get()
    Unit
}