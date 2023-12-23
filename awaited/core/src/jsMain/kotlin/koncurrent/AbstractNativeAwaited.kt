package koncurrent

import koncurrent.awaited.toPromise

actual abstract class AbstractNativeAwaited<out T> : NativeAwaited<T> {
    override fun toPromise(): Promise<T> = (this as Awaited<T>).toPromise()
}