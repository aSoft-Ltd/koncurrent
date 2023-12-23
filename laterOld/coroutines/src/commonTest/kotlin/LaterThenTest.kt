import kommander.expect
import kommander.toBe
import kase.Success
import kommander.IgnoreOSX
import koncurrent.Later
import kotlin.test.Test

@IgnoreOSX
class LaterThenTest {
    @Test
    fun can_call_then_without_crashing() {
        val l = Later(1).then { it + 1 }
        expect(l.state).toBe<Success<Int>>()
    }
}