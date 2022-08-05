plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library() }
    js(IR) { library() }

    val nativeTargets = nativeTargets(false)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(project(":functions-core"))
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

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "Primary building block needed for running concurrent multiplatform code"
)