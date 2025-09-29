package koncurrent.later

import koncurrent.AwaitedTestResult
import koncurrent.Later
import koncurrent.awaited.test as awaitedTest

fun Later<Any?>.test(): AwaitedTestResult = awaitedTest()