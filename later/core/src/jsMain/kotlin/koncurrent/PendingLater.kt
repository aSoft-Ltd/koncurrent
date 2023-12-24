@file:Suppress("ACTUAL_WITHOUT_EXPECT", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE")

package koncurrent

actual typealias PendingLater<T> = MutablePromise<T>

actual fun <T> PendingLater<T>.resolveWith(value: T): Boolean {
    val res = resolver ?: throw IllegalStateException("Attempting to resolve a none PendingLater")
    res(value)
    return true
}

actual fun <T> PendingLater<T>.rejectWith(error: Throwable): Boolean {
    val rej = rejecter ?: throw IllegalStateException("Attempting to reject a none PendingLater")
    rej(error)
    return true
}


private const val PENDING_LATER_RESOLVER_NAME = "_later_resolver"
internal var <T> PendingLater<T>.resolver: Resolver<T>?
    set(value) {
        asDynamic()[PENDING_LATER_RESOLVER_NAME] = value
    }
    get() = asDynamic()[PENDING_LATER_RESOLVER_NAME]

private const val PENDING_LATER_REJECTOR_NAME = "_later_rejector"

internal var <T> PendingLater<T>.rejecter: Rejecter?
    set(value) {
        asDynamic()[PENDING_LATER_REJECTOR_NAME] = value
    }
    get() = asDynamic()[PENDING_LATER_REJECTOR_NAME]