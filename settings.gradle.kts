pluginManagement {
    includeBuild("../build-logic")
}

plugins {
    id("multimodule")
}

fun includeSubs(base: String, path: String = base, vararg subs: String) {
    subs.forEach {
        include(":$base-$it")
        project(":$base-$it").projectDir = File("$path/$it")
    }
}

listOf(
    "kommander", "kollections", "kevlar", "kase"
).forEach { includeBuild("../$it") }

rootProject.name = "koncurrent"

includeSubs("koncurrent-executors", "executors", "core", "coroutines", "mock")
includeSubs("koncurrent-later", "later", "core", "coroutines", "test")
