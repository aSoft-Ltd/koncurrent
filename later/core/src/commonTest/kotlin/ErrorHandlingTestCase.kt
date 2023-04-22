import kommander.WatchOsIgnore
import kommander.expect
import koncurrent.Later
import koncurrent.MockExecutor
import koncurrent.SynchronousExecutor
import kotlin.test.Test

@WatchOsIgnore
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
        }
        expect(blockcount).toBe(4, "Chained code blocks where not executed as expected")
        expect(result).toBe(1)
    }

    @Test
    fun should_execute_catch_when_it_encounters_an_error() {
        var blockcount = 0
        var result = 0
        Later(0, executor).then {
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
        Later(4, executor).then {
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
        Later(4, SynchronousExecutor).then {
            blockcount++       // 1
            val ret = it + 7
            println("ret(then): $ret")
            ret // 11
        }.then {
            blockcount++
            val ret = it - 11       // 2
            println("ret(then): $ret")
            ret               // 0
        }.then {
            blockcount++       // 3
            val ret = it divide it
            println("ret(then): $ret")
            ret             // error
        }.catch {
            blockcount++       // 4
            println("ret(catch): 5")
            5
        }.then {
            blockcount++       // 5
            result = it        //
            println("res(then): $result")
        }
        expect(blockcount).toBe(5, "Chained code blocks where not executed as expected")
        expect(result).toBe(5)
    }

    @Test
    fun can_totally_chain_many_errors_and_then_blocks_continuously() {
        var blockcount = 0
        var result = 0
        Later(4, executor).then {
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