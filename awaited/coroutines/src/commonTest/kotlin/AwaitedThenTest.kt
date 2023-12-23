import kommander.expect
import kommander.toBe
import kase.Success
import kommander.IgnoreOSX
import koncurrent.awaited
import kotlin.test.Test

@IgnoreOSX
class AwaitedThenTest {
    @Test
    fun can_call_then_without_crashing() {
        val l = awaited(1).then { it + 1 }
        expect(l.state).toBe<Success<Int>>()
    }
}