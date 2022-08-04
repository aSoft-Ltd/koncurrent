import expect.expect
import koncurrent.pending.await
import koncurrent.pending
import kotlinx.coroutines.test.TestResult
import kotlinx.coroutines.test.runTest
import kotlin.test.Test

class PendingLambdasShouldBeAbleToRunSuspendingCode {
    @Test
    fun should_be_constructable_with_suspend_functions_in_a_suspend_scope(): TestResult {
        val pend = pending {
            0
        }
        return runTest {
            expect(pend.await()).toBe(0)
        }
    }
}