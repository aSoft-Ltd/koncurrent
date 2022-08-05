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
                api(projects.koncurrentLaterCore)
                api(projects.koncurrentPrimitivesCoroutines)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(project(":expect-coroutines"))
                api(projects.koncurrentPrimitivesMock)
            }
        }
    }
}

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "An multiplatform implementation of a Promised based api"
)