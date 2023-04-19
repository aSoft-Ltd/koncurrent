pluginManagement {
    enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")

    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }

    dependencyResolutionManagement {
        versionCatalogs {
            file("../versions/gradle/versions").listFiles().map {
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

rootProject.name = "koncurrent"

includeBuild("../able")

// dependencies
includeSubs("functions", "../functions", "core")
includeSubs("kommander", "../kommander", "core", "coroutines")
includeSubs("kollections", "../kollections", "atomic", "interoperable")
includeSubs("kevlar", "../kevlar", "core")
includeSubs("kase", "../kase", "core")

// submodules
includeSubs("koncurrent-executors", "executors", "core", "coroutines", "mock")
includeSubs("koncurrent-later", "later", "core", "coroutines", "test")