import expect.expect
import expect.toBe
import kase.Success
import koncurrent.Later
import kotlin.test.Test

class LaterThenTest {
    @Test
    fun can_call_then_without_crashing() {
        val l = Later(1).then { it + 1 }
        expect(l.state).toBe<Success<Int>>()
    }
}