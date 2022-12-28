package koncurrent.later

import koncurrent.Later
import koncurrent.Thenable

fun <D> Result<D>.toLater(): Later<D>{
    val exp = exceptionOrNull()
    return if(exp!=null) {
        Later.reject(exp)
    } else {
        Later.resolve(getOrThrow())
    }
}

fun <D> Result<D>.toThenable(): Thenable<D> = toLater()