plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "A mock implementation of primitives to be used in testing environments"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() } //
    if (Targeting.WASM) wasmJs { library() }
    if (Targeting.WASM) wasmWasi { library() }
    if (Targeting.OSX) osxTargets() else listOf()
    if (Targeting.NDK) ndkTargets() else listOf()
    if (Targeting.LINUX) linuxTargets() else listOf()
    if (Targeting.MINGW) mingwTargets() else listOf()

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentExecutorsCore)
            }
        }
    }
}