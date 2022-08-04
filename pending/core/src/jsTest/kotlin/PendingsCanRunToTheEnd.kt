import koncurrent.Pending
import koncurrent.pending
import koncurrent.pending.then
import kotlin.test.Test

class PendingsCanRunToTheEnd {
    @Test
    fun should_run_to_completion() = (pending<Int> {
        throw RuntimeException("Wooozaaaaa")
    } as Pending<Int>).catch {
        println("Recovering from ${it.message}")
        43
    }.then {
        println("Adding the pending object")
        it + 1
    }.then {
        println("trying to return unit")
    }.finally {
        println("completed")
    }
}