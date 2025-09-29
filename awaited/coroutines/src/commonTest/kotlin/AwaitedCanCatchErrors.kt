import kommander.expect
import koncurrent.MockExecutor
import koncurrent.awaited
import koncurrent.later.await
import kotlinx.coroutines.test.TestResult
import kotlinx.coroutines.test.runTest
import kotlin.math.truncate
import kotlin.test.Ignore
import kotlin.test.Test
import kotlin.test.assertEquals

class AwaitedCanCatchErrors {
    val executor = MockExecutor()

    @Test
    @Ignore // Coz wasm can't handle exceptions for now
    fun should_be_able_to_recover_on_a_failure(): TestResult {
        var zero = -1
        val result = awaited(executor) { res, _ ->
            zero = 0
            res(25)
        }.then {
            1 divide zero // so that it fails
        }.catch {
            zero
        }

        return runTest {
            assertEquals(0, result.await())
        }
    }
}