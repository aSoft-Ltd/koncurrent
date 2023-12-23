package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.AwaitedTestResult

actual inline fun Awaited<Any?>.test(): AwaitedTestResult {
    toCompletableFuture().get()
}