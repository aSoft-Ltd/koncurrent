import expect.expect
import kollections.iListOf
import koncurrent.ProgressState
import koncurrent.StagedProgress
import kotlin.test.Test

class StagedProgressTest {
    @Test
    fun should_have_a_zero_aggregate_when_everything_is_zero() {
        val current = StagedProgress("Stage 1", 1, 1, 0L, 0L)
        val state = ProgressState(
            current = current, stages = iListOf(current)
        )
        expect(state.aggregate).toBe(0.0)
    }

    @Test
    fun should_have_the_same_aggregate_as_the_only_stage_it_contains() {
        val current = StagedProgress("Stage 1", 1, 1, 10L, 100L)
        val state = ProgressState(
            current = current, stages = iListOf(current)
        )
        expect(state.aggregate).toBe(10.0)
    }

    @Test
    fun should_have_50pct_aggregate_if_1_of_2_stages_is_complete() {
        val stage1 = StagedProgress("Stage 1", 1, 1, 100L, 100L)
        val stage2 = StagedProgress("Stage 2", 1, 1, 0L, 100L)
        val state = ProgressState(
            current = stage1, stages = iListOf(stage1, stage2)
        )
        expect(state.aggregate).toBe(50.0)
    }

    @Test
    fun should_have_75pct_aggregate_if_3_of_4_stages_are_complete() {
        val stage1 = StagedProgress("Stage 1", 1, 1, 100L, 100L)
        val stage2 = StagedProgress("Stage 2", 1, 1, 100L, 100L)
        val stage3 = StagedProgress("Stage 3", 1, 1, 100L, 100L)
        val stage4 = StagedProgress("Stage 4", 1, 1, 0L, 100L)
        val state = ProgressState(
            current = stage3, stages = iListOf(stage1, stage2, stage3, stage4)
        )
        expect(state.aggregate).toBe(75.0)
    }
}