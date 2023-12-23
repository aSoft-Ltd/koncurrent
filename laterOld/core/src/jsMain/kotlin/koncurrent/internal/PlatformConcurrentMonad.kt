@file:Suppress("ACTUAL_WITHOUT_EXPECT", "ACTUAL_TYPE_ALIAS_TO_CLASS_WITH_DECLARATION_SITE_VARIANCE")

package koncurrent.internal

import koncurrent.Promise

actual typealias PlatformConcurrentMonad<T> = Promise<T>