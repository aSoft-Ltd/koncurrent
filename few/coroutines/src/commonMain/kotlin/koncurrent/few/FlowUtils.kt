package koncurrent.few

import koncurrent.Few
import koncurrent.few
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.launch

// TODO: Leaky at the moment
fun <T> Few<T>.toFlow(): Flow<T> = channelFlow{
    collect {
        trySend(it)
    }
    close()
}

// TODO: Leaky at the moment
fun <T> Flow<T>.toFew(scope: CoroutineScope): Few<T> = few {
    scope.launch { collect { emit(it) } }
}