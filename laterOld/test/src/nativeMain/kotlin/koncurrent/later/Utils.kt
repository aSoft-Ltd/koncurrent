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
import kotlinx.coroutines.runBlocking

actual inline fun Later<Any?>.test(): LaterTestResult = runBlocking {
    await()
    Unit
}