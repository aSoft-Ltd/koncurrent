package koncurrent.later

import koncurrent.Later
import koncurrent.later
import kotlin.math.exp
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay

class EstimationRate(
    val bytes: Int = 1024 * 10,
    val duration: Duration = 1.milliseconds
)

/**
 * An estimation function that estimates how much progress will be taken to process a sequence of bytes
 * @param bytes The total number of bytes to be processed
 * @param rate The estimation rate of the process
 * @param max The maximum possible value this estimation can achieve
 * @param until On which conditions should this estimation terminate
 */
fun CoroutineScope.estimate(bytes: Int, rate: EstimationRate = EstimationRate(), max: Int = 100, until: () -> Boolean): Later<Unit> = later {
    val (estimating) = it.setStages("estimating")
    var tx = 0.0
    val tt = bytes
    while (!until()) {
        val p = max * (1 - exp(-tx / tt))
        it.updateProgress(estimating(p.toInt(), 100))
        delay(rate.duration)
        tx += rate.bytes
    }
}