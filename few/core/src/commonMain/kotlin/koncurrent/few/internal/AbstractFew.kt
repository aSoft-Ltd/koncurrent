package koncurrent.few.internal

import functions.BiConsumer
import functions.Consumer
import functions.Function
import koncurrent.Few
import koncurrent.FewCollector

internal abstract class AbstractFew<out T> : Few<T> {

    override fun collect(collector: (T) -> Unit) = collect(SimpleFewCollector(collector))

    override fun error(catcher: (FewCollector<@UnsafeVariance T>, Throwable) -> Unit): Few<T> = catch(catcher)

    override fun error(catcher: BiConsumer<FewCollector<@UnsafeVariance T>, Throwable>): Few<T> = catch(catcher::accept)

    override fun <R> map(transformer: Function<T, R>): Few<R> = map(transformer::invoke)

    override fun onEach(consumer: Consumer<@UnsafeVariance T>): Few<T> = onEach(consumer::accept)

    protected fun catchImpl(collector: FewCollector<T>): Throwable? {
        var fromDownStream: Throwable? = null
        try {
            collect {
                try {
                    collector.emit(it)
                } catch (e: Throwable) {
                    fromDownStream = e
                    throw e
                }
            }
        } catch (e: Throwable) {
            val fromDownStream = fromDownStream ?: return e
            e.addSuppressed(fromDownStream)
            throw e
        }
        return null
    }
}