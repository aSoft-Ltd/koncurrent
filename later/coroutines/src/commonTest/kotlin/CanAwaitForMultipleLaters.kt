import kollections.forEach
import kollections.toTypedArray
import kommander.IgnoreOSX
import kommander.expect
import koncurrent.Later
import koncurrent.Laters
import koncurrent.later.filterSuccessValues
import koncurrent.later.test
import koncurrent.later.then
import kotlin.test.Test

@IgnoreOSX
class CanAwaitForMultipleLaters {

    @Test
    fun should_resolve_multiple_laters() = Laters(
        Later(1),
        Later(2),
        Later(3),
    ).then { list ->
        list.filterSuccessValues()
    }.then {
        it.toTypedArray().sum()
    }.then {
        expect(it).toBe(6)
    }.test()

    @Test
    fun should_resolve_just_fulfilled_values() = Laters<Int>(
        Later { res, _ -> res(1) },
        Later { res, _ -> res(2) },
        Later { res, _ -> res(3) },
        Later { res, _ -> res(4) },
    ).then {
        println("Resolved")
        it.forEach {res->
            println(res)
        }
        it.filterSuccessValues().toTypedArray().sum()
    }.then {
        expect(it).toBe(1 + 2 + 3 + 4)
    }.test()
}