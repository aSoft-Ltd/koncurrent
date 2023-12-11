package koncurrent

import kotlin.test.Test
class TmpTest {

    @Test
    fun should_run_in_an_executor() {
        val executor: Executor = SynchronousExecutor
        executor.execute { println("Executed") }
    }
}