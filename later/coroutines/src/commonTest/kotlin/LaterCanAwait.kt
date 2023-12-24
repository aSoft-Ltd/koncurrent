import koncurrent.*
import koncurrent.later.*
import kotlinx.coroutines.test.TestResult
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals

class LaterCanAwait {
    val executor = MockExecutor()

    @Test
    fun should_be_able_to_recover_on_a_failure(): TestResult {
        var zero = -1
        val result = Later<Int>(executor) { res, _ ->
            zero = 0
            res(25)
        }.then {
            println("danger here")
            1 divide zero // so that it fails
        }.then {
            println("danger cont...")
            it * 2
        }.catch {
            println("Recovering")
            zero
        }.then {
            println("Recovered")
            it + 1
        }

        return runTest {
            assertEquals(1, result.await())
        }
    }
}