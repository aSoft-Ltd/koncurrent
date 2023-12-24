import kommander.IgnoreOSX
import kommander.expect
import koncurrent.Later
import koncurrent.LaterTestResult
import koncurrent.MockExecutor
import koncurrent.later.catch
import koncurrent.later.test
import koncurrent.later.then
import kotlin.test.Test

@IgnoreOSX
class ErrorHandlingTestCase {

    val executor = MockExecutor()

    @Test
    fun should_propagate_errors_down_stream(): LaterTestResult {
        var blockcount = 0
        var result = -1
        var zero = -1
        return Later(executor) { res, _ ->
            blockcount++
            zero = 0
            res(25)
        }.then {
            blockcount++
            1 divide zero // so that it fails
        }.then {
            blockcount++
            it * 2
        }.catch {
            blockcount++
            zero
        }.then {
            blockcount++
            it + 1
            result = it + 1
            expect(blockcount).toBe(4, "Chained code blocks where not executed as expected")
            expect(result).toBe(1)
        }.test()
    }

    @Test
    fun should_execute_catch_when_it_encounters_an_error() : LaterTestResult {
        var blockcount = 0
        var result = 0
        return Later(0, executor).then {
            blockcount++
            it divide it
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            result = it
            expect(blockcount).toBe(3)
            expect(result).toBe(5)
        }.test()
    }

    @Test
    fun should_not_execute_catch_if_there_are_no_errors() : LaterTestResult {
        var blockcount = 0
        var result = 0
        return Later(4, executor).then {
            blockcount++
            it + 7
        }.catch {
            blockcount++
            5
        }.then {
            blockcount++
            result = it
            expect(blockcount).toBe(2)
            expect(result).toBe(11)
        }.test()
    }

    @Test
    fun can_totally_chain_errors_and_then_blocks_continuously() : LaterTestResult {
        var blockcount = 0
        var result = 0
        return Later(4, executor).then {
            blockcount++       // 1
            val ret = it + 7
            expect(blockcount).toBe(1)
            ret // 11
        }.then {
            blockcount++
            val ret = it - 11       // 2
            expect(blockcount).toBe(2)
            ret               // 0
        }.then {
            blockcount++       // 3
            val ret = it divide it
            expect(blockcount).toBe(3)
            ret             // error
        }.catch {
            blockcount++       // 4
            expect(blockcount).toBe(4)
            5
        }.then {
            blockcount++       // 5
            result = it        //
            expect(blockcount).toBe(5)
            expect(blockcount).toBe(5, "Chained code blocks where not executed as expected")
            expect(result).toBe(5)
        }.test()
    }

    @Test
    fun can_totally_chain_many_errors_and_then_blocks_continuously() : LaterTestResult {
        var blockcount = 0
        var result = 0
        return Later(4, executor).then {
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
            expect(blockcount).toBe(8, "Chained code blocks where not executed as expected")
            expect(result).toBe(0)
        }.test()
    }
}