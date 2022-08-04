package koncurrent

import koncurrent.few.internal.simpleFew
import java.util.function.Consumer

object FewBuilder {
    @JvmStatic
    @JvmOverloads
    fun <T> build(
        value: T,
        executor: Executor = Executors.default()
    ): Few<T> = simpleFew(executor) {
        emit(value)
    }

    @JvmOverloads
    @JvmStatic
    fun <T> build(
        block: Consumer<FewCollector<T>>,
        executor: Executor = Executors.default(),
    ): Few<T> = simpleFew(executor, block::accept)
}