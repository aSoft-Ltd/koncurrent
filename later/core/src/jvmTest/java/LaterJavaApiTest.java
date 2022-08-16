import expect.ExpectBuilders;
import koncurrent.Later;
import org.junit.jupiter.api.Test;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class LaterJavaApiTest {

    Later<Integer> getLater() {
        return Later.resolve(2);
    }

    CompletableFuture<Integer> getFuture() {
        getLater().then(i -> {
            System.out.println(i);
            return i + 1;
        }).toCompletable();

        return CompletableFuture.completedFuture(2);
    }

    @Test
    public void should_be_able_to_construct_laters_easily() throws ExecutionException, InterruptedException {
        var res = getFuture();
        ExpectBuilders.expect(res.get()).toBe(2);
    }
}
