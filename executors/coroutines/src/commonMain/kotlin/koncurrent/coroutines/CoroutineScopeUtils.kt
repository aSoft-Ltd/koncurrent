package koncurrent.coroutines

import koncurrent.CoroutineExecutor
import kotlinx.coroutines.*

fun CoroutineScope.asExecutor(): CoroutineExecutor = CoroutineExecutor(this)