import kommander.expect
import koncurrent.LaterTestResult
import koncurrent.PendingLater
import koncurrent.awaited.finally
import koncurrent.awaited.test
import kotlin.test.Test

class PendingLaterTest {
    @Test
    fun should_be_able_to_resolve_a_pending_later(): LaterTestResult {
        val later = PendingLater<String>()
        later.resolveWith("Works")
        var resolved = false
        return later.then {
            resolved = true
            expect(it).toBe("Works")
        }.catch {
            throw it
        }.finally {
            expect(resolved).toBe(true, "Later was not resolved when it should have been resolved")
        }.test()
    }
}