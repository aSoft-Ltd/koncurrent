@file:Suppress("ACTUAL_WITHOUT_EXPECT")
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

actual inline fun Later<out Any?>.test(): LaterTestResult {
    toCompletableFuture().get()
    Unit
}