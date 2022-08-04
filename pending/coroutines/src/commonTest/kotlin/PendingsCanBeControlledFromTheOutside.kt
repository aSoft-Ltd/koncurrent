import expect.expect
import koncurrent.ControlledPending
import koncurrent.pending.await
import koncurrent.pending
import koncurrent.pending.resolveWith
import kotlinx.coroutines.test.runTest
import kotlin.test.Test

class PendingsCanBeControlledFromTheOutside {
    @Test
    fun should_be_resolvable_externally() = runTest {
        val pending = ControlledPending<Int>()
        val success = pending.resolveWith(1)
        expect(success).toBe(true)
        val res = pending.await()
        val success2 = pending.resolveWith(2)
        expect(success2).toBe(false)
        expect(res).toBe(1)
    }

    @Test
    fun should_not_be_able_to_control_an_uncontrolled_pending() = runTest {
        val pending = pending { 0 }
        val success = pending.resolveWith(1)
        expect(success).toBe(true)
        val res = pending.await()
        val success2 = pending.resolveWith(2)
        expect(success2).toBe(false)
        expect(res).toBe(1)
    }
}