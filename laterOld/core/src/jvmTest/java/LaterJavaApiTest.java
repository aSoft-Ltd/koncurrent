import koncurrent.Later
import koncurrent.later.then
import koncurrent.later.andThen
import koncurrent.later.andZip
import koncurrent.later.zip
import koncurrent.later.catch;
import org.junit.jupiter.api.Test;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static expect.ExpectBuilders.expect;

public class LaterJavaApiTest {

    Later<Integer> getLater() {
        return Later.of(2);
    }

    CompletableFuture<Integer> getFuture() {
        return getLater().then(i -> {
            System.out.println(i);
            return i + 1;
        }).andThen(it -> getLater()).toCompletable();
    }

    @Test
    public void should_be_able_to_construct_laters_easily() throws ExecutionException, InterruptedException {
        var res = getFuture();
        expect(res.get()).toBe(2);
    }
}
