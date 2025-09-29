import org.jetbrains.kotlin.gradle.targets.js.npm.tasks.KotlinNpmInstallTask

plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() } //
    if (Targeting.WASM) wasmJs { library() }
    if (Targeting.OSX) osxTargets()
    if (Targeting.LINUX) linuxTargets()

    sourceSets {
        commonMain.dependencies {
            api(projects.koncurrentAwaitedCore)
            api(projects.koncurrentExecutorsCoroutines)
        }

        commonTest.dependencies {
            implementation(libs.kommander.coroutines)
            implementation(projects.koncurrentAwaitedTest)
            implementation(projects.koncurrentExecutorsMock)
        }

        if (Targeting.JVM) jvmTest.dependencies {
            implementation(kotlin("test-junit5"))
        }
    }
}

