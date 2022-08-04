plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library() }
    js(IR) { library() }
//    val nativeTargets = nativeTargets(true)
    val nativeTargets = linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentFewCore)
                api(projects.koncurrentPendingCoroutines)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(projects.expectCoroutines)
                implementation(projects.koncurrentPrimitivesMock)
            }
        }
    }
}

aSoftOSSLibrary(
    version = asoft.versions.foundation.get(),
    description = "An extension of the reactive monad to use it in a coroutine contex"
)