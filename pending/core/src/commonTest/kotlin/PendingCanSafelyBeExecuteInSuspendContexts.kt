import expect.expect
import koncurrent.pending
import koncurrent.pending.collect
import koncurrent.pending.exception
import koncurrent.pending.map
import kotlinx.coroutines.delay
import kotlinx.coroutines.test.runTest
import kotlin.test.Test

class PendingCanSafelyBeExecuteInSuspendContexts {

    private fun fail(): Int = throw IllegalStateException("Failed intionally")

    @Test
    fun should_map_from_one_pending_type_to_another() = runTest {
        pending {
            10
        }.map {
            delay(10)
            fail()
        }.exception {
            delay(10)
            2
        }.map {
            it - 2
        }.collect {
            expect(it).toBe(0)
        }
    }
}