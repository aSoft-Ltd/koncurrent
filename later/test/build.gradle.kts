plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library() }
    js(IR) { library() }

    val nativeTargets = nativeTargets(true)
//    val nativeTargets = linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                if (System.getenv("INCLUDE_BUILD") == "true") {
                    api(asoft.expect.coroutines)
                } else {
                    api(project(":expect-coroutines"))
                }

                api(projects.koncurrentLaterCore)
                api(projects.koncurrentPrimitivesMock)
            }
        }

        val nativeMain by creating {
            dependsOn(commonMain)
            dependencies {
                api(projects.koncurrentLaterCoroutines)
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

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "An multiplatform implementation of a Promised based api"
)