package koncurrent.later

import koncurrent.*

actual inline fun Later<*>.test(executor: Executor): dynamic = runLaterTest(executor) { this }