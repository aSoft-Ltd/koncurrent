package koncurrent.awaited

import koncurrent.Awaited
import koncurrent.internal.TestPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

actual inline fun Awaited<Any?>.test(): TestPromise = GlobalScope.promise {
    await()
}.unsafeCast()
