@file:JvmName("PendingCoroutineUtilsJvm")

package koncurrent.pending

import koncurrent.Pending
import kotlin.jvm.JvmName

actual suspend inline fun <T> Pending<out Pending<out T>>.awaitChain(): T = await().await()