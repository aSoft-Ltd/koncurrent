package koncurrent.later

import kase.Failure
import kase.Result
import kase.Success
import koncurrent.Later
import koncurrent.Thenable

fun <D> Result<D>.toLater(): Later<D> = when (this) {
    is Failure -> Later.reject(cause)
    is Success -> Later.resolve(data)
}

fun <D> Result<D>.toThenable(): Thenable<D> = toLater()