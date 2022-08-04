package koncurrent.internal

import koncurrent.MockExecutorConfig

@PublishedApi
internal class MockExecutorConfigImpl(
    override val name: String,
    override val logOnExecute: Boolean
) : MockExecutorConfig