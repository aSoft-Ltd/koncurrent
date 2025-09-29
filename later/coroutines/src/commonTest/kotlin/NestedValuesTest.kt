import kommander.IgnoreOSX
import kommander.expect
import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.MockExecutor
import koncurrent.awaited.catch
import koncurrent.awaited.finally
import koncurrent.awaited.then
import koncurrent.awaited.test
import kotlin.test.Test
import kotlin.test.fail

@IgnoreOSX
class NestedValuesTest {

    @Test
    fun should_be_able_to_unwrap_cascaded_values_without_a_callback(): LaterTestResult {
        val executor = MockExecutor()
        return Later(Later(2, executor), executor).andThen {
            it
        }.then {
            expect(it).toBe(2)
        }.test()
    }

    @Test
    fun should_be_able_to_unwrap_cascaded_values(): LaterTestResult {
        val executor = MockExecutor()
        return Later(2, executor).andThen {
            Later(it+1)
        }.then {
            expect(it).toBe(3)
        }.test()
    }

    @Test
    fun should_be_able_to_unwrap_cascaded_values_with_a_callback(): LaterTestResult {
        val executor = MockExecutor()
        return Later(1, executor).andThen {
            Later(2 + it, executor)
        }.then {
            expect(it).toBe(3)
        }.catch {
            fail("Unreachable code")
        }.test()
    }

    @Test
    fun should_be_able_to_switch_executors(): LaterTestResult {
        val e1 = MockExecutor("Mock Executor 1")

        val e2 = MockExecutor("Mock Executor 2")

        val e3 = MockExecutor("Mock Executor 3")
        var recovered = false
        var result = -1
        return Later(0, e1).then(e2) {
            println("In executor 2")
            expect(it).toBe(0)
            it + 1
        }.then(e3) {
            println("In executor 3")
            expect(it).toBe(1)
            it * 2
        }.then(e1) {
            expect(it).toBe(2)
            1 divide (it - 2)
        }.catch(e2) {
            recovered = true
            0
        }.finally {
            result = 1
            println("Finished processing later")
            expect(result).toBe(1, "Finally block didn't execute")
            expect(recovered).toBe(true, "Expected Later to be recovered at this point but it wasn't")
        }.test()
    }

    @Test
    fun should_keep_execution_on_first_executor() = Later(0, MockExecutor("Mock Executor 1")).then {
        expect(it).toBe(0)
        it + 1
    }.then {
        expect(it).toBe(1)
        it * 2
    }.then {
        expect(it).toBe(2)
        1 divide (it - 2)
    }.catch {
        0
    }.finally {
        println("Finished processing later")
    }.test()
}