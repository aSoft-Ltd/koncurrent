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
                api(asoft.kotlinx.collections.atomic)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(asoft.expect.core)
                implementation(projects.koncurrentPrimitivesMock)
                implementation(projects.koncurrentLaterTest)
            }
        }


        val nativeMain by creating {
            dependsOn(commonMain)
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
    description = "An multiplatform implementation of a Promised based api"
)