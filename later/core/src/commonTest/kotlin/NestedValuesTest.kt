import kommander.WatchOsIgnore
import kommander.expect
import koncurrent.Later
import koncurrent.MockExecutor
import koncurrent.later.catch
import koncurrent.later.finally
import koncurrent.later.then
import kotlin.test.Test

@WatchOsIgnore
class NestedValuesTest {

    @Test
    fun should_be_able_to_unwrap_cascaded_values_without_a_callback() {
        val executor = MockExecutor()
        var resolved = false
        Later(Later(2, executor), executor).andThen {
            it
        }.then {
            println("Comparing")
            expect(it).toBe(2)
            println("Finished comparing")
            resolved = true
        }
        println("Done here")
        expect(resolved).toBe(true, "Expected then block to be resolved but it wasn't")
    }

    @Test
    fun should_be_able_to_unwrap_cascaded_values_with_a_callback() {
        val executor = MockExecutor()
        var resolved = false
        Later(1, executor).andThen {
            println("Flattening")
            Later(2 + it, executor)
        }.then {
            println("Comparing $it")
            expect(it).toBe(3)
            println("Finished comparing")
            resolved = true
        }
        println("Done here")
        expect(resolved).toBe(true, "Expected then block to be executed but it wasn't")
    }

    @Test
    fun should_be_able_to_switch_executors() {
        val e1 = MockExecutor("Mock Executor 1")

        val e2 = MockExecutor("Mock Executor 2")

        val e3 = MockExecutor("Mock Executor 3")
        var recovered = false
        var result = -1
        Later(0, e1).then(e2) {
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
        }
        expect(result).toBe(1, "Finally block didn't execute")
        expect(recovered).toBe(true, "Expected Later to be recovered at this point but it wasn't")
    }

    @Test
    fun should_keep_execution_on_first_executor() {
        Later(0, MockExecutor("Mock Executor 1")).then {
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
        }
    }
}