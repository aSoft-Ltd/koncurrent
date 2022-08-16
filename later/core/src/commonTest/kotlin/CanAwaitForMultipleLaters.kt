import expect.expect
import koncurrent.Fulfilled
import koncurrent.Later
import koncurrent.MockExecutor
import koncurrent.later.filterFulfilledValues
import koncurrent.later.test
import kotlin.test.Test

class CanAwaitForMultipleLaters {

    val executor = MockExecutor()

    @Test
    fun should_resolve_multiple_laters() = Later.all(
        Later.resolve(1),
        Later.resolve(2),
        Later.resolve(3),
    ).then { list ->
        list.mapNotNull { (it as? Fulfilled)?.value }
    }.then {
        it.sum()
    }.then {
        expect(it).toBe(6)
    }.test()

    @Test
    fun should_resolve_just_fulfilled_values() = Later.all(
        Later { res, _ -> res(1) },
        Later { res, _ -> res(2) },
        Later { res, _ -> res(3) },
        Later { res, _ -> res(4) },
    ).then {
        it.filterFulfilledValues().sum()
    }.then {
        expect(it).toBe(1 + 2 + 3 + 4)
    }.test()
}