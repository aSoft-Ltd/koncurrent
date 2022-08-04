import expect.NativeIgnore
import koncurrent.*
import koncurrent.pending.await
import koncurrent.pending.catch
import koncurrent.pending.then
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.test.TestResult
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals

class CoroutinesCanAwait {
    @Test
    fun should_be_able_to_await_a_coroutine(): TestResult {
        val result = pending {
            1
        }
        return runTest {
            assertEquals(1, result.await())
        }
    }

    @Test
    fun should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline(): TestResult {
        val result = (pending<Int> {
            throw IllegalArgumentException("Whoops")
        } as Pending<Int>).catch {
            1
        }.then {
            it * 2
        }.then {
            it + 1
        }
        return runTest {
            assertEquals(3, result.await())
        }
    }

    @Test
    fun should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline(): TestResult {
        val result = pending<Int> {
            throw IllegalArgumentException("Whoops")
        }.then {
            it + 1
        }.catch<Int> {
            1
        }.then {
            it * 2
        }.then {
            it + 1
        }

        return runTest {
            assertEquals(3, result.await())
        }
    }

    @Test
    @NativeIgnore
    fun should_be_able_to_recover_from_an_error_mid_pipeline(): TestResult {
        var zero = -1
        val result = pending {
            zero = 0
            25
        }.then {
            1 / zero // so that it fails
        }.then {
            it * 2
        }.catch<Int> {
            zero
        }.then {
            it + 1
        }
        return runTest {
            assertEquals(1, result.await())
        }
    }
}