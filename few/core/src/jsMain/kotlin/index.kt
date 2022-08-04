@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

import koncurrent.Executor
import koncurrent.Executors
import koncurrent.Few
import koncurrent.FewCollector
import koncurrent.few.internal.simpleFew

fun <T> fewOf(value: T, executor: Executor = Executors.default()): Few<T> = simpleFew(executor) {
    emit(value)
}

fun <T> few(
    block: (FewCollector<T>) -> Unit,
    executor: Executor = Executors.default()
): Few<T> = simpleFew(executor) {
    block(this)
}

fun <T> catch(handler: (Throwable) -> T) {
    console.log("Nyeee")
}