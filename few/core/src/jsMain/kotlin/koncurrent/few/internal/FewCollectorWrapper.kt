package koncurrent.few.internal

import koncurrent.FewCollector

class FewCollectorWrapper<in T>(private val wrapped: dynamic) : FewCollector<T> {
    override fun emit(value: T) {
        wrapped.emit(value)
    }
}