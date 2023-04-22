package koncurrent

import functions.Runnable

actual interface Executor {
    actual fun execute(runnable: Runnable)
}