plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() }
//    if (Targeting.WASM) wasm { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
//    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
//    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()
    val nativeTargets = osxTargets + /*ndkTargets + mingwTargets */ linuxTargets

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(libs.kommander.coroutines)
                api(libs.koncurrent.later.core)
                api(libs.koncurrent.executors.mock)
            }
        }

        val nativeMain by creating {
            dependsOn(commonMain)
            dependencies {
                api(libs.koncurrent.later.coroutines)
            }
        }

        (nativeTargets).forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(nativeMain)
            }
        }
    }
}