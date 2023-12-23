package koncurrent.later

import koncurrent.FailedLater
import koncurrent.SuccessfulLater

inline fun <D> Result<D>.toLater() = try {
    SuccessfulLater(getOrThrow())
} catch (err: Throwable) {
    FailedLater(err)
}