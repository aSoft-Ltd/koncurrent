package koncurrent

import koncurrent.few.internal.simpleFew

inline fun <T> fewOf(value: T, executor: Executor = Executors.default()): Few<T> = simpleFew(executor) {
    emit(value)
}

inline fun <T> few(
    on: Executor = Executors.default(),
    noinline block: FewCollector<T>.() -> Unit
): Few<T> = simpleFew(on, block)