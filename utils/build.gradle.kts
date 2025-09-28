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

    applyDefaultHierarchyTemplate()
}
