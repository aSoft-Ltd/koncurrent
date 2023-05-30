package koncurrent

expect interface Executor {
    fun execute(runnable: Runnable)
}