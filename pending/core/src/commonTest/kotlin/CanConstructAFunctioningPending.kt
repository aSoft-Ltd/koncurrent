import expect.expect
import koncurrent.*
import koncurrent.pending.catch
import koncurrent.pending.then
import kotlin.test.Test

class CanConstructAFunctioningPending {
    val executor = MockExecutor()

    @Test
    fun should_resolve_quickly() {
        val p = executor.pending { 42 }
        p.then(executor) {
            expect(it).toBe(42)
            println("Got $it")
        }
    }

    @Test
    fun should_be_able_to_recover_on_a_failure() {
        val p: Pending<out Int> = executor.pending { throw RuntimeException("Wooozaaaaa") }
        p.catch(executor) {
            println("Recovering from ${it.message}")
            43
        }.then(executor) {
            println("Adding the pending object")
            expect(it).toBe(43)
            it + 1
        }
    }
}