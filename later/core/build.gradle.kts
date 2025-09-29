plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api for concurrency"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library(testTimeout = 10000) }
    if (Targeting.WASM) wasmJs { library() }
    if (Targeting.WASM) wasmWasi { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
//    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
//    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()

    val nativeTargets = osxTargets + /*ndkTargets + mingwTargets */ linuxTargets

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentExecutorsCore)
                api(projects.koncurrentUtils)
                api(libs.kase.core)
                api(libs.kollections.interoperable)
                api(kotlinx.atomicfu)
            }
        }

        val awaitedMain by creating {
            dependsOn(commonMain)
            dependencies {
                api(projects.koncurrentAwaitedCore)
            }
        }

        val webMain by creating {
            dependsOn(commonMain)
            dependencies {
                implementation(kotlinx.browser)?.because("We need native promises")
            }
        }

        if (Targeting.JS) {
            val jsMain by getting {
                dependsOn(webMain)
            }
        }

        if (Targeting.JVM) jvmMain {
            dependsOn(awaitedMain)
        }

        if (Targeting.WASM) {
            val wasmJsMain by getting {
                dependsOn(webMain)
            }

            val wasmWasiMain by getting {
                dependsOn(awaitedMain)
            }
        }

        (nativeTargets).forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(awaitedMain)
            }
        }
    }
}
