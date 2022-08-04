import expect.expect
import expect.toBeLessThan
import koncurrent.MockExecutor
import koncurrent.few
import koncurrent.few.toFew
import koncurrent.few.toFlow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.test.runTest
import kotlin.test.Test

class CanConvertAFewIntoAFlow {

    val executor = MockExecutor()

    fun getFewNumbers() = few {
        repeat(3) { emit(it) }
    }

    fun getFlowNumbers() = flow {
        repeat(3) { emit(it) }
    }

    @Test
    fun a_few_should_be_callable_as_a_flow() = runTest {
        getFewNumbers().toFlow().onEach {
            println("Flowing $it")
        }.collect {
            println("collecting :$it")
            expect(it).toBeLessThan(3)
        }
    }

    @Test
    fun a_flow_should_be_callable_as_a_few() = runTest {
        getFlowNumbers().toFew(this).onEach {
            println("Flowing $it")
        }.executeOn(executor).collect {
            println("collecting :$it")
            expect(it).toBeLessThan(3)
        }
    }
}