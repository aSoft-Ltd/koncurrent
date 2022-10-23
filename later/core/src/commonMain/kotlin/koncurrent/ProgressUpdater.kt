package koncurrent

interface ProgressUpdater {
    fun setStages(vararg stages: String): List<Stage>

    @Deprecated("In favour of updateProgress(progress: StagedProgress)")
    fun updateProgress(done: Long, total: Long): Boolean
    fun updateProgress(progress: StageProgress): Boolean
}