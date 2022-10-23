package koncurrent.later.internal

import koncurrent.ProgressState
import koncurrent.StageProgress
import kotlin.math.round

internal data class StageProgressImpl(
    /**
     * The name of the current stage
     */
    override val name: String,
    /**
     * The number of the current state. e.g. Stage `1`
     */
    override val number: Int,

    /**
     * Total number of stages
     */
    override val outOf: Int,

    /**
     * Amount completed in this stage
     */
    override val done: Long,

    /**
     * Total quantity required to be done for completion
     */
    override val total: Long
) : StageProgress {
    override val doneAmountAsDouble = done.toDouble()

    override val totalAmountAsDouble = total.toDouble()

    override val doneFraction = if (total != 0L) (done.toDouble() / total.toDouble()) else 0.0

    override val donePercentage = round(100 * doneFraction)

    override val remainingFraction = 1 - doneFraction

    override val remainingPercentage = 100 - donePercentage

    override fun invoke(progress: StageProgress) = StageProgressImpl(name, number, outOf, progress.done, progress.total)

    override fun invoke(done: Long, total: Long) = StageProgressImpl(name, number, outOf, done, total)

    override fun invoke(progress: ProgressState) = StageProgressImpl(name, number, outOf, progress.current.done, progress.current.total)
}