package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.AwaitedTestResult
import kotlinx.coroutines.runBlocking

actual inline fun Awaited<Any?>.test(): AwaitedTestResult = runBlocking {
    await()
    Unit
}