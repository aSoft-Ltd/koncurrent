package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.AwaitedTestResult
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

actual inline fun Awaited<Any?>.test(): AwaitedTestResult = GlobalScope.promise { await() }
