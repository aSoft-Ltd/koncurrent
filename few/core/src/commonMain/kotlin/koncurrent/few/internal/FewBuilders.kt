package koncurrent.few.internal

import koncurrent.Executor
import koncurrent.Executors
import koncurrent.Few
import koncurrent.FewCollector

@PublishedApi
internal inline fun <T> simpleFew(
    on: Executor = Executors.default(),
    noinline block: FewCollector<T>.() -> Unit
): Few<T> = SimpleFewImpl(on, block)


