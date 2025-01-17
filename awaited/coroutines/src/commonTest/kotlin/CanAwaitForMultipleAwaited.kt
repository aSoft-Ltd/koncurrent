import kollections.toTypedArray
import kommander.IgnoreOSX
import kommander.expect
import koncurrent.awaited
import koncurrent.allAwaited
import koncurrent.awaited.filterSuccessValues
import koncurrent.awaited.test
import kotlin.test.Ignore
import kotlin.test.Test

//@IgnoreOSX
@Ignore // Coz wasm can't handle exceptions for now
class CanAwaitForMultipleAllAwaited {

    @Test
    fun should_resolve_multiple_allAwaited() = allAwaited(
        awaited(1),
        awaited(2),
        awaited(3),
    ).then { list ->
        list.filterSuccessValues()
    }.then {
        it.toTypedArray().sum()
    }.then {
        expect(it).toBe(6)
    }.test()

    @Test
    fun should_resolve_just_fulfilled_values() = allAwaited<Int>(
        awaited { res, _ -> res(1) },
        awaited { res, _ -> res(2) },
        awaited { res, _ -> res(3) },
        awaited { res, _ -> res(4) },
    ).then {
        it.filterSuccessValues().toTypedArray().sum()
    }.then {
        expect(it).toBe(1 + 2 + 3 + 4)
    }.test()
}