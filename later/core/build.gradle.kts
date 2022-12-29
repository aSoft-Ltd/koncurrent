plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
    id("io.codearte.nexus-staging")
    signing
}

kotlin {
    jvm { library(); withJava() }
    js(IR) { library() }

//    val nativeTargets = nativeTargets(true)
    val nativeTargets = linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.koncurrentPrimitivesCore)
                api(projects.kollectionsInteroperable)
                api(projects.koncurrentLaterApi)
                api(projects.kaseCore)
                api(asoft.kotlinx.collections.atomic)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(project(":expect-core"))
                implementation(projects.koncurrentPrimitivesMock)
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

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "An multiplatform implementation of a Promised based api"
)