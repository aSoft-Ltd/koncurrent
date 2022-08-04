import koncurrent.Later
import koncurrent.MockExecutor
import koncurrent.few
import koncurrent.later.then
import kotlin.test.Test

class FewAndLaterTest {
    private val em = MockExecutor("Executor #M Mock")
    private val e1 = MockExecutor("Executor #1 Mock")
    private val e2 = MockExecutor("Executor #2 Mock")
    private val e3 = MockExecutor("Executor #3 Mock")

    @Test
    fun should_play_well_with_later() {
        few(em) {
            Later.resolve(0, e1).then {
                println("processing block 1")
                emit(it + 1)
                it + 1
            }.then(e2) {
                println("processing block 2")
                emit(it + 1)
                it + 1
            }.then(e3) {
                println("processing block 3")
                emit(it)
            }
        }.onEach {
            println("Watching $it pass by")
        }.collect {
            println("Collecting $it")
        }
    }
}