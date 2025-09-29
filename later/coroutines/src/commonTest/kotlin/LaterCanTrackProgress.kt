import kase.progress.ProgressBus
import kase.progress.VoidProgressBus
import kollections.component1
import kollections.component2
import kollections.get
import kommander.IgnoreOSX
import kommander.expect
import koncurrent.Later
import koncurrent.PendingLater
import koncurrent.awaited.test
import koncurrent.onUpdate
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.test.Test

@IgnoreOSX
class LaterCanTrackProgress {

    private val scope = CoroutineScope(Dispatchers.Default)

    fun user(bus: ProgressBus = VoidProgressBus): Later<String> {
        val l = PendingLater<String>()
        val stages = bus.setStages("Stage 1", "Stage 2")
        val s1 = stages[0]
        val s2 = stages[1]
        scope.launch {
            for (i in 0..5) {
                delay(5)
                bus.updateProgress(s1(i * 10L, 100))
            }

            for (i in 5..10) {
                delay(5)
                bus.updateProgress(s2(i * 10L, 100))
            }
            l.resolveWith("Jane")
        }
        return l
    }

    fun stagedUser(bus: ProgressBus = VoidProgressBus): Later<String> {
        val l = PendingLater<String>()

        scope.launch {
            val (reading, writing) = bus.setStages("Reading", "Writing")

            for (i in 0..10) {
                delay(1)
                bus.updateProgress(reading(i * 10L, 100))
            }
            
            for (i in 0..10) {
                delay(1)
                bus.updateProgress(writing(i * 10L, 100))
            }
            l.resolveWith("Jane")
        }
        return l
    }

    val bus = ProgressBus()
    @Test
    fun should_be_able_to_track_progress() = user(bus).onUpdate(bus) {
        println("${it.donePercentage}% complete")
    }.then {
        println("expecting")
        expect(it).toBe("Jane")
        println("expected")
    }.test()

    @Test
    fun should_be_able_propergate_progress_down_the_line() = user(bus).onUpdate(bus) {
        println("Progress 1: ${it.donePercentage}% complete")
    }.then {
        expect(it).toBe("Jane")
        1
    }.onUpdate(bus) {
        println("Progress 2: ${it.donePercentage}% complete")
    }.then {
        expect(it).toBe(1)
    }.test()

    @Test
    fun should_be_able_to_track_multi_stage_processes() = stagedUser(bus).onUpdate(bus) {
        println("${it.current.name}: ${it.current.donePercentage}% complete")
        println("Aggregate: ${it.donePercentage}")
    }.then {
        expect(it).toBe("Jane")
        1
    }.onUpdate(bus) {
        println("Progress 2: ${it.current.donePercentage}%")
    }.then {
        expect(it).toBe(1)
    }.test()
}