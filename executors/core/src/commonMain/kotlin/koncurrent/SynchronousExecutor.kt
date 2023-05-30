@file:Suppress("NON_EXPORTABLE_TYPE")

package koncurrent

/**
 * An executor that doesn't really switch thread,
 * but keeps execution on the current thread that is executing
 * and executes its code synchronously
 */
object SynchronousExecutor : Executor {
    override fun execute(runnable: Runnable) = runnable.run()
    override fun toString(): String = "SynchronousExecutor"
}