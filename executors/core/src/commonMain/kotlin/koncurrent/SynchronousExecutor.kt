package koncurrent

/**
 * An executor that doesn't really switch thread,
 * but keeps execution on the current thread that is executing
 * and executes its code synchronously
 */
@Deprecated(
    message = "This reference will be marked internal",
    replaceWith = ReplaceWith("Executors.current()", "koncurrent.Executors")
)
object SynchronousExecutor : Executor {
    override fun execute(runnable: Runnable) = runnable.run()
    override fun toString(): String = "SynchronousExecutor"
}