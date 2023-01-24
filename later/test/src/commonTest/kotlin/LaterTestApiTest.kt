import expect.expect
import koncurrent.MockExecutor
import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.later.test
import koncurrent.later.then
import kotlin.test.Test

class LaterTestApiTest {
    val executor = MockExecutor()

    @Test
    fun should_be_able_to_run_later_tests() = Later(45, executor).then {
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
    fun can_return_after_some_computation(): LaterTestResult {
        val int = 6
        return Later(int).test()
    }

    @Test
    fun should_be_able_to_test_things_imperatively() = Later(45, executor).andThen {
        Later(it + 24)
    }.then {
        println("Expecting")
        it * 10
        println("Expected")
    }.test()
}