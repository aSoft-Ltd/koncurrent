import expect.expect
import koncurrent.MockExecutor
import koncurrent.few
import koncurrent.fewOf
import kotlin.test.Test

class FewApiTest {

    private val mockExecutor = MockExecutor()

    @Test
    fun should_be_able_to_create_a_few() {
        fewOf(0).executeOn(mockExecutor).collect {
            println("Collecting $it")
            expect(it).toBe(0)
            println("Collected $it")
        }
    }

    @Test
    fun should_be_able_to_collect_multiple_few() {
        val name = few(on = mockExecutor) {
            println("Emitting A")
            emit("A")
            println("Emitting N")
            emit("N")
            println("Emitting D")
            emit("D")
            println("Emitting Y")
            emit("Y")
            println("Finished emitting")
        }
        println("Haven't began collection, so this should run first")
        var collectedName = ""
        name.collect {
            println("Collecting $it")
            collectedName += it
        }
        println("Collected: $collectedName")
    }

    @Test
    fun should_be_able_to_interpect_intermediate_values() {
        val name = few(on = mockExecutor) {
            emit("A")
            emit("N")
            emit("D")
            emit("Y")
        }.onEach {
            println("Seeing $it")
        }.map { "'$it'" }
        var collectedName = ""
        name.collect {
            println("Collecting $it")
            collectedName += it
        }
        println("Collected: $collectedName")
    }

    @Test
    fun should_be_able_to_catch_upstream_errors() {
        few(mockExecutor) {
            emit(1)
            emit(2)
            throw IllegalStateException("For fun")
        }.catch {
            println("Caught a nasty error: ${it.message}")
            emit(3)
            emit(4)
            emit(5)
        }.collect {
            println("Collecting $it")
        }
    }
}