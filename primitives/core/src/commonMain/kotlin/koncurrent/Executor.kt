package koncurrent

import functions.Runnable

expect interface Executor {
    fun execute(runnable: Runnable)
}