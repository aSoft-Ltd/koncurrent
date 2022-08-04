package koncurrent.few.internal

import koncurrent.FewCollector

internal class SimpleFewCollector<in T>(val block: (T) -> Unit) : FewCollector<T> {
    override fun emit(value: T) = block(value)
}