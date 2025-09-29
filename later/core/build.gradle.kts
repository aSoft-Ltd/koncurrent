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

    applyDefaultHierarchyTemplate()

    sourceSets {
        commonMain.dependencies {
            api(projects.koncurrentExecutorsCore)
            api(projects.koncurrentUtils)
            api(libs.kase.core)
            api(libs.kollections.interoperable)
            api(kotlinx.atomicfu)
            api(projects.koncurrentAwaitedCore)
        }

        webMain.dependencies {
            implementation(kotlinx.browser)?.because("We need native promises")
        }
    }
}
