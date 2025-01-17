import kommander.expect
import koncurrent.AwaitedTestResult
import koncurrent.MockExecutor
import koncurrent.awaited
import koncurrent.awaited.test
import kotlin.test.Ignore
import kotlin.test.Test

@Ignore // coz wasm can't handle exceptions for now
class AwaitedTestApiTest {
    val executor = MockExecutor()

    @Test
    fun should_be_able_to_run_awaited_tests() = awaited(45, executor).then {
        it + 1
    }.then {
        println("expecting")
        expect(it).toBe(46)
        println("expected")
        it * 10
    }.then {
        println("Another result: $it")
    }.test()

    @Test
    fun can_return_after_some_computation(): AwaitedTestResult {
        val int = 6
        return awaited(int).test()
    }

    @Test
    fun should_be_able_to_test_things_imperatively() = awaited(45, executor).andThen {
        awaited(it + 24)
    }.then {
        println("Expecting")
        it * 10
        println("Expected")
    }.test()
}