plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() } // untill https://youtrack.jetbrains.com/issue/KT-80014 gets fixed // untill https://youtrack.jetbrains.com/issue/KT-80014 gets fixed
    if (Targeting.WASM) wasmJs { library() }
//    if (Targeting.WASM) wasmWasi { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
//    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
//    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()
    val nativeTargets = osxTargets + /*ndkTargets + mingwTargets */ linuxTargets

    applyDefaultHierarchyTemplate()

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(libs.kommander.coroutines)
                api(projects.koncurrentAwaitedCore)
                api(projects.koncurrentExecutorsMock)
            }
        }

        webMain.dependencies {
            api(projects.koncurrentAwaitedCoroutines)
            implementation(kotlinx.coroutines.core)
        }

//        val wasmMain by creating {
//            dependsOn(commonMain)
//            dependencies {
//                api(projects.koncurrentAwaitedCoroutines)
//            }
//        }
//
        val nativeMain by getting {
            dependsOn(commonMain)
            dependencies {
                api(projects.koncurrentAwaitedCoroutines)
            }
        }

        if (Targeting.JVM) jvmTest.dependencies {
            implementation(kotlin("test-junit5"))
        }

//        if(Targeting.WASM) {
//            val wasmJsMain by getting {
//                dependsOn(wasmMain)
//            }
//        }

        (nativeTargets).forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(nativeMain)
            }
        }
    }
}

tasks.named("wasmJsTestTestDevelopmentExecutableCompileSync").configure {
    mustRunAfter(tasks.named("jsBrowserTest"))
    mustRunAfter(tasks.named("jsNodeTest"))
}