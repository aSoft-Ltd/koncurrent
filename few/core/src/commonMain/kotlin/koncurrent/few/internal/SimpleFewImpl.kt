package koncurrent.few.internal

import koncurrent.Executor
import koncurrent.Executors
import koncurrent.Few
import koncurrent.FewCollector

@PublishedApi
internal class SimpleFewImpl<out T>(
    private val executor: Executor = Executors.default(),
    internal val block: FewCollector<T>.() -> Unit
) : AbstractFew<T>() {
    override fun collect(collector: FewCollector<T>) = executor.execute { collector.block() }

    override fun executeOn(executor: Executor): Few<T> = SimpleFewImpl(executor, block)

    override fun <R> map(transformer: (T) -> R): Few<R> = transform(transformer)

    override fun onEach(block: (T) -> Unit): Few<T> = transform { block(it);it }

    override fun catch(catcher: FewCollector<@UnsafeVariance T>.(Throwable) -> Unit): Few<T> = SimpleFewImpl(executor) {
        val exception = catchImpl(this)
        if (exception != null) catcher(exception)
    }

    private inline fun <R> transform(
        crossinline transformer: (T) -> R
    ): Few<R> = SimpleFewImpl(executor) {
        collect {
            emit(transformer(it))
        }
    }
}