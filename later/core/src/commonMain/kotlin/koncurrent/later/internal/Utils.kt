@file:JvmName("UtilsCommon")

package koncurrent.later.internal

import koncurrent.Executor
import koncurrent.Later
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import kotlin.jvm.JvmName

@OptIn(ExperimentalContracts::class)
internal fun Any?.isThenable(): Boolean {
    contract {
        returns(true) implies (this@isThenable is Later<*>)
    }
    if (this == null) return false
    if (this is Later<*>) return true
    return false
}

internal expect fun <T> Later<T>.toPlatformConcurrentMonad(executor: Executor): PlatformConcurrentMonad<out T>

internal expect fun <T> Later<T>.toPlatformConcurrentMonad(): PlatformConcurrentMonad<out T>