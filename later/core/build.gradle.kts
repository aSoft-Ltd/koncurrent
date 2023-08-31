plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library(testTimeout = 10000) }
//    if (Targeting.WASM) wasm { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
//    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
//    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()

    val nativeTargets = osxTargets + /*ndkTargets + mingwTargets */ linuxTargets

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentExecutorsCore)
                api(projects.kollectionsInteroperable)
                api(projects.kaseCore)
                api(projects.kollectionsAtomic)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(libs.kommander.core)
                implementation(projects.koncurrentExecutorsMock)
                implementation(projects.koncurrentLaterTest)
            }
        }


        val nonJvmMain by creating {
            dependsOn(commonMain)
        }

        val jsMain by getting {
            dependsOn(nonJvmMain)
        }

        val nativeMain by creating {
            dependsOn(nonJvmMain)
        }

        (nativeTargets).forEach {
            val main by it.compilations.getting {}
            main.defaultSourceSet {
                dependsOn(nativeMain)
            }
        }
    }
}