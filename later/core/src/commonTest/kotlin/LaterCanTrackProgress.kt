import expect.expect
import koncurrent.*
import koncurrent.later.test
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.test.Test

class LaterCanTrackProgress {

    private val scope = CoroutineScope(Dispatchers.Default)

    fun user(): Later<String> {
        val l = LaterPromise<String>()
        scope.launch {
            for (i in 0..10) {
                delay(500)
                l.updateProgress(i * 10L, 100)
            }
            l.resolveWith("Jane")
        }
        return l
    }

    @Test
    fun should_be_able_to_track_progress() = user().progress {
        println("${it.donePercentage}% complete")
    }.then {
        println("expecting")
        expect(it).toBe("Jane")
        println("expected")
    }.test()

    @Test
    fun should_be_able_propergate_progress_down_the_line() = user().progress {
        println("Progress 1: ${it.donePercentage}% complete")
    }.then {
        expect(it).toBe("Jane")
        1
    }.progress {
        println("Progress 2: ${it.donePercentage}%")
    }.then {
        expect(it).toBe(1)
    }.test()
}