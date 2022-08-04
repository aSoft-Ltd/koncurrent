@file:JvmName("UtilsCommon")

package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import kotlin.jvm.JvmName

internal expect fun <T> Later<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<out T>

internal expect fun <T> Later<T>.toPlatformConcurrentMonad(): PlatformConcurrentMonad<out T>