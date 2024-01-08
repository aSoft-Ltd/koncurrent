package koncurrent

import koncurrent.awaited.toPromise

actual abstract class AbstractAwaited<out T> {
    fun toPromise(): Promise<T> = (this as Awaited<T>).toPromise()
}