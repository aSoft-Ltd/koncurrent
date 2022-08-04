plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm {
        library()
    }
    js(IR) { library() }

//    val nativeTargets = nativeTargets(true)
    val nativeTargets = linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentPendingCore)
                api(projects.koncurrentPrimitivesCoroutines)
            }
        }

        val commonTest by getting {
            dependencies {
                api(projects.expectCoroutines)
                implementation(projects.koncurrentPrimitivesMock)
            }
        }

        val nonJsMain by creating {
            dependsOn(commonMain)
        }

        val jvmMain by getting {
            dependsOn(nonJsMain)
        }

        val jsMain by getting {

        }

        val nativeMain by creating {
            dependsOn(nonJsMain)
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
    version = asoft.versions.foundation.get(),
    description = "An multiplatform representation of a Promised based api"
)