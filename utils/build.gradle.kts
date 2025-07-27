import org.jetbrains.kotlin.gradle.targets.js.npm.tasks.KotlinNpmInstallTask

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

            }
        }


        val nonJvmMain by creating {
            dependsOn(commonMain)
        }

        val wasmAndNativeMain by creating {
            dependsOn(nonJvmMain)
        }

        if(Targeting.JS) {
            val jsMain by getting {
                dependsOn(nonJvmMain)
            }
        }

        if(Targeting.WASM) {

            val wasmJsMain by getting {
                dependsOn(wasmAndNativeMain)
            }

            val wasmWasiMain by getting {
                dependsOn(wasmAndNativeMain)
            }

            val wasmJsTest by getting {
                dependencies {
                    implementation(kotlin("test"))
                }
            }
        }

        (nativeTargets).forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(wasmAndNativeMain)
            }
        }
    }
}
