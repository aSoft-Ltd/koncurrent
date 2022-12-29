plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library();withJava() }
    js(IR) { library() }

//    val nativeTargets = nativeTargets(true)
    val nativeTargets = linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentPrimitivesCore)
            }
        }

        val nonJvmMain by creating {
            dependsOn(commonMain)
        }

        val jsMain by getting {
            dependsOn(nonJvmMain)
        }

        nativeTargets.forEach {
            (nativeTargets).forEach {
                val main by it.compilations.getting {}
                main.defaultSourceSet {
                    dependsOn(nonJvmMain)
                }
            }
        }
    }
}

aSoftOSSLibrary(
    version = asoft.versions.root.get(), description = "An multiplatform implementation of a Thenable based api"
)