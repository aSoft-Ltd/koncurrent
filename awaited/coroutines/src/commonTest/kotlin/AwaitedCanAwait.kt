import koncurrent.MockExecutor
import koncurrent.awaited
import koncurrent.awaited.await
import kotlinx.coroutines.test.TestResult
import kotlinx.coroutines.test.runTest
import kotlin.test.Ignore
import kotlin.test.Test
import kotlin.test.assertEquals

class AwaitedCanAwait {
    val executor = MockExecutor()

    @Test
    @Ignore // Coz wasm can't handle exceptions for now
    fun should_be_able_to_recover_on_a_failure(): TestResult {
        var zero = -1
        val result = awaited(executor) { res, _ ->
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