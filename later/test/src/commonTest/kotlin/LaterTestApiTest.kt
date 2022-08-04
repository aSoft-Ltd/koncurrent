import expect.expect
import koncurrent.*
import koncurrent.later.flatten
import koncurrent.later.then
import koncurrent.later.test
import kotlin.test.Test

class LaterTestApiTest {
    val executor = MockExecutor()

    @Test
    fun should_be_able_to_run_later_tests() = runLaterTest(executor) {
        Later.resolve(45, executor).then {
            it + 1
        }.then {
            println("expecting")
            expect(it).toBe(46)
            println("expected")
            it * 10
        }.then {
            println("Another result: $it")
        }
    }

    @Test
    fun can_return_after_some_computation(): LaterTestResult {
        val int = 6
        return Later.resolve(int).test()
    }

    @Test
    fun should_be_able_to_test_things_imperatively() = Later.resolve(45, executor).flatten {
        Later.resolve(it + 24)
    }.then {
        println("Expecting")
        it * 10
        println("Expected")
    }.test()
}