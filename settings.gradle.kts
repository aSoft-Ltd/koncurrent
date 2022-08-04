pluginManagement {
    enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")

    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }

    dependencyResolutionManagement {
        versionCatalogs {
            file("gradle/versions").listFiles().map {
                it.nameWithoutExtension to it.absolutePath
            }.forEach { (name, path) ->
                create(name) { from(files(path)) }
            }
        }
    }
}

fun includeRoot(name: String, path: String) {
    include(":$name")
    project(":$name").projectDir = File(path)
}

fun includeSubs(base: String, path: String = base, vararg subs: String) {
    subs.forEach {
        include(":$base-$it")
        project(":$base-$it").projectDir = File("$path/$it")
    }
}

val tmp = 1

rootProject.name = "koncurrent"

// dependencies
if (System.getenv("INCLUDE_BUILD") == "true") {
    includeBuild("../functions")
    includeBuild("../expect")
} else {
    includeSubs("functions", "../functions", "core")
    includeSubs("expect", "../expect", "core", "coroutines")
}

// submodules
includeSubs("koncurrent-primitives", "primitives", "core", "coroutines", "mock")
includeSubs("koncurrent-later", "later", "core", "coroutines", "test")