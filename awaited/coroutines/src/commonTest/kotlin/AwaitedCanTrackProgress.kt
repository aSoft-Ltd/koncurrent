import kommander.IgnoreOSX
import kommander.expect
import koncurrent.Awaited
import koncurrent.MutableAwaited
import koncurrent.awaited.test
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kollections.get
import kollections.component1
import kollections.component2
import kotlin.test.Test

@IgnoreOSX
class AwaitedCanTrackProgress {

    private val scope = CoroutineScope(Dispatchers.Default)

    fun user(): Awaited<String> {
        val l = MutableAwaited<String>()
        val stages = l.setStages("Stage 1", "Stage 2")
        val s1 = stages[0]
        val s2 = stages[1]
        scope.launch {
            for (i in 0..5) {
                delay(5)
                l.updateProgress(s1(i * 10L, 100))
            }

            for (i in 5..10) {
                delay(5)
                l.updateProgress(s2(i * 10L, 100))
            }
            l.resolveWith("Jane")
        }
        return l
    }

    fun stagedUser(): Awaited<String> {
        val l = MutableAwaited<String>()

        scope.launch {
            val (reading, writing) = l.setStages("Reading", "Writing")

            for (i in 0..10) {
                delay(1)
                l.updateProgress(reading(i * 10L, 100))
            }

            for (i in 0..10) {
                delay(1)
                l.updateProgress(writing(i * 10L, 100))
            }
            l.resolveWith("Jane")
        }
        return l
    }

    @Test
    fun should_be_able_to_track_progress() = user().onUpdate {
        println("${it.asExecuting?.progress?.donePercentage}% complete")
    }.then {
        println("expecting")
        expect(it).toBe("Jane")
        println("expected")
    }.test()

    @Test
    fun should_be_able_propergate_progress_down_the_line() = user().onUpdate {
        println("Progress 1: ${it.asExecuting?.progress?.donePercentage}% complete")
    }.then {
        expect(it).toBe("Jane")
        1
    }.onUpdate {
        println("Progress 2: ${it.asExecuting?.progress?.donePercentage}% complete")
    }.then {
        expect(it).toBe(1)
    }.test()

    @Test
    fun should_be_able_to_track_multi_stage_processes() = stagedUser().onUpdate { state ->
        val it = state.asExecuting?.progress
        println("${it?.current?.name}: ${it?.current?.donePercentage}% complete")
        println("Aggregate: ${it?.donePercentage}")
    }.then {
        expect(it).toBe("Jane")
        1
    }.onUpdate { state ->
        val it = state.asExecuting?.progress
        println("Progress 2: ${it?.current?.donePercentage}%")
    }.then {
        expect(it).toBe(1)
    }.test()
}