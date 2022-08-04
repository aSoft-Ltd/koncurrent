package koncurrent.later

import koncurrent.*

actual inline fun Later<*>.test(executor: Executor): LaterTestResult = runLaterTest(executor) { this }