package koncurrent.later

import koncurrent.Later
import koncurrent.LaterTestResult
import kotlinx.coroutines.runBlocking

actual inline fun Later<Any?>.test(): LaterTestResult = runBlocking {
    await()
}