import expect.expect
import koncurrent.Later
import koncurrent.MockExecutor
import koncurrent.later.catch
import koncurrent.later.then
import kotlin.test.Test

class ErrorHandlingTestCase {

    val executor = MockExecutor()

    @Test
    fun should_propagate_errors_down_stream() {
        var blockcount = 0
        var result = -1
        var zero = -1
        Later(executor) { res, _ ->
            blockcount++
            zero = 0
            res(25)
        }.then {
            blockcount++
            println("danger here")
            1 divide zero // so that it fails
        }.then {
            blockcount++
            println("danger cont...")
            it * 2
        }.catch {
            blockcount++
            println("Recovering")
            zero
        }.then {
            blockcount++
            println("Recovered")
            it + 1
            result = it + 1
        }
        expect(blockcount).toBe(4, "Chained code blocks where not executed as expected")
        expect(result).toBe(1)
    }

    @Test
    fun should_execute_catch_when_it_encounters_an_error() {
        var blockcount = 0
        var result = 0
        Later.resolve(0, executor).then {
            blockcount++
            it divide it
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            result = it
        }
        expect(blockcount).toBe(3)
        expect(result).toBe(5)
    }

    @Test
    fun should_not_execute_catch_if_there_are_no_errors() {
        var blockcount = 0
        var result = 0
        Later.resolve(4, executor).then {
            blockcount++
            it + 7
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            result = it
        }
        expect(blockcount).toBe(2)
        expect(result).toBe(11)
    }

    @Test
    fun can_totally_chain_errors_and_then_blocks_continuously() {
        var blockcount = 0
        var result = 0
        Later.resolve(4, executor).then {
            blockcount++
            it + 7
        }.then {
            blockcount++
            it - 11
        }.then {
            blockcount++
            it divide it
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            result = it
        }
        expect(blockcount).toBe(5, "Chained code blocks where not executed as expected")
        expect(result).toBe(5)
    }

    @Test
    fun can_totally_chain_many_errors_and_then_blocks_continuously() {
        var blockcount = 0
        var result = 0
        Later.resolve(4, executor).then {
            blockcount++
            it + 7
        }.then {
            blockcount++
            it - 11
        }.then {
            blockcount++
            it divide it
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            it - 5
        }.then {
            blockcount++
            it divide it
        }.catch {
            blockcount++
            0
        }.then {
            blockcount++
            result = it
        }
        expect(blockcount).toBe(8, "Chained code blocks where not executed as expected")
        expect(result).toBe(0)
    }
}