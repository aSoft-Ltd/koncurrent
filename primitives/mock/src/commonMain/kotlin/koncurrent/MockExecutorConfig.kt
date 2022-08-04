package koncurrent

import koncurrent.internal.MockExecutorConfigImpl
import kotlin.jvm.JvmField
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic

interface MockExecutorConfig {
    val name: String
    val logOnExecute: Boolean

    companion object {
        @JvmField
        val DEFAULT_NAME = "Mock Exector"

        @JvmField
        val DEFAULT_LOG_ON_EXECUTE = true

        @JvmStatic
        @JvmName("create")
        operator fun invoke(
            name: String = DEFAULT_NAME,
            logOnExecute: Boolean = DEFAULT_LOG_ON_EXECUTE
        ): MockExecutorConfig = MockExecutorConfigImpl(name, logOnExecute)
    }
}