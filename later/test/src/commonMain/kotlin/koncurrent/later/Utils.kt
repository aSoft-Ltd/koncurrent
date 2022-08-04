package koncurrent.later

import koncurrent.*

expect inline fun Later<*>.test(executor: Executor = Executors.default()): LaterTestResult