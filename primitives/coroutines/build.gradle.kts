plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library() }
    js(IR) { library() }

    nativeTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentPrimitivesCore)
                api(kotlinx.coroutines.core)
            }
        }
    }
}

aSoftOSSLibrary(
    version = asoft.versions.foundation.get(),
    description = "A coroutine extension of the primary building blocks needed for running concurrent multiplatform code"
)