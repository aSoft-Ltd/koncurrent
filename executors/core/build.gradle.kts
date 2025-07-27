import org.jetbrains.kotlin.gradle.targets.js.npm.tasks.KotlinNpmInstallTask

plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "Primary building block needed for running concurrent multiplatform code"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() }
    if (Targeting.WASM) wasmJs { library() }
    if (Targeting.WASM) wasmWasi { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()

    val nativeTargets = osxTargets + ndkTargets + linuxTargets + mingwTargets

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(libs.kotlinx.exports)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }

        val nonJvmMain by creating {
            dependsOn(commonMain)
        }

        val jsAndWasmJsMain by creating {
            dependsOn(nonJvmMain)
        }

        if (Targeting.JS) {
            val jsMain by getting {
                dependsOn(jsAndWasmJsMain)
            }
        }

        if (Targeting.WASM) {
            val wasmJsMain by getting {
                dependsOn(jsAndWasmJsMain)
            }

            val wasmWasiMain by getting {
                dependsOn(nonJvmMain)
            }
        }

        val nativeMain by creating {
            dependsOn(nonJvmMain)
        }

        nativeTargets.forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(nativeMain)
            }
        }
    }
}

