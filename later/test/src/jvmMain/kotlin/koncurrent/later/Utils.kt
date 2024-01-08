@file:Suppress(
    "ACTUAL_WITHOUT_EXPECT"
)
package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult

actual fun Later<out Any?>.test(): LaterTestResult {
    get()
    Unit
}