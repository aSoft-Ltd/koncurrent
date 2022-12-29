@file:JvmName("UtilsCommon")

package koncurrent.internal

import koncurrent.Executor
import koncurrent.Later
import koncurrent.LaterPromise
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import kotlin.jvm.JvmName

internal expect fun <T> LaterPromise<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<out T>