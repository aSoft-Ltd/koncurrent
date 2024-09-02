plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "A coroutine extension of the primary building blocks needed for running concurrent multiplatform code"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() }
    if (Targeting.WASM) wasmJs { library() }

    // coroutines don't support wasi at the moment
    // if (Targeting.WASM) wasmWasi { library() }

    if (Targeting.OSX) osxTargets() else listOf()
    if (Targeting.NDK) ndkTargets() else listOf()
    if (Targeting.LINUX) linuxTargets() else listOf()
    if (Targeting.MINGW) mingwTargets() else listOf()

    sourceSets {
        commonMain.dependencies {
            api(projects.koncurrentExecutorsCore)
            api(kotlinx.coroutines.core)
            api(kotlinx.atomicfu) // needed for linuxX64 to compile (other targets work fine without it)
        }
    }
}