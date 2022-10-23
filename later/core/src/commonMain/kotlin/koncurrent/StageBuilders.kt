package koncurrent

import koncurrent.later.internal.StageProgressImpl

fun StagedProgress(
    name: String,
    number: Int,
    outOf: Int,
    done: Long,
    total: Long
): StageProgress = StageProgressImpl(name, number, outOf, done, total)

fun Stage(
    name: String,
    number: Int,
    outOf: Int
): Stage = StageProgressImpl(name, number, outOf, 0L, 0L)