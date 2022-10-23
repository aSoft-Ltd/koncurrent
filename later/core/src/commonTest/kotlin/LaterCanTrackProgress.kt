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

    fun stagedUser(): Later<String> {
        val l = LaterPromise<String>()

        scope.launch {
            val (reading, writing) = l.setStages("Reading", "Writing")

            for (i in 0..10) {
                delay(500)
                l.updateProgress(reading(i * 10L, 100))
            }

            for (i in 0..10) {
                delay(500)
                l.updateProgress(writing(i * 10L, 100))
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

    @Test
    fun should_be_able_to_track_multi_stage_processes() = stagedUser().onUpdate {
        println("${it.current.name}: ${it.current.donePercentage}% complete")
        println("Aggregate: ${it.aggregate}")
    }.then {
        expect(it).toBe("Jane")
        1
    }.onUpdate {
        println("Progress 2: ${it.current.donePercentage}%")
    }.then {
        expect(it).toBe(1)
    }.test()
}