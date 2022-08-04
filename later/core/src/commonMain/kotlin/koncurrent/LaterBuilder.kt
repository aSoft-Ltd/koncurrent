@file:Suppress("FunctionName")

package koncurrent

inline fun <T> Later(
    executor: Executor = Executors.default(),
    noinline handler: ((resolve: (T) -> Unit, reject: ((Throwable) -> Unit)) -> Unit)
): Later<out T> = Later(handler, executor)


inline fun <T> Executor.later(noinline builder: Executor.() -> T): Later<out T> {
    val l = Later<T>(executor = this)
    execute {
        try {
            l.resolveWith(builder())
        } catch (err: Throwable) {
            l.rejectWith(err)
        }
    }
    return l
}