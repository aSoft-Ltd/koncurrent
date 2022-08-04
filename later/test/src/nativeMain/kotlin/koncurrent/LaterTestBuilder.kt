package koncurrent

import kotlinx.coroutines.runBlocking
import koncurrent.later.await

actual fun <T> runLaterTest(executor: Executor, block: () -> Later<out T>): LaterTestResult = runBlocking {
    val later = block()
    later.await()
    Unit
}