plugins {
    kotlin("multiplatform")
    id("tz.co.asoft.library")
}

description = "An multiplatform implementation of a Promised based api"

kotlin {
    if (Targeting.JVM) jvm { library() }
    if (Targeting.JS) js(IR) { library() } // untill https://youtrack.jetbrains.com/issue/KT-80014 gets fixed // untill https://youtrack.jetbrains.com/issue/KT-80014 gets fixed
    if (Targeting.WASM) wasmJs { library() }
    if (Targeting.OSX) osxTargets()
    if (Targeting.LINUX) linuxTargets()

    sourceSets {
        commonMain.dependencies {
            api(projects.koncurrentLaterCore)
            api(projects.koncurrentExecutorsCoroutines)
        }

        commonTest.dependencies {
            implementation(libs.kommander.coroutines)
            implementation(projects.koncurrentLaterTest)
            implementation(projects.koncurrentExecutorsMock)
        }

        if(Targeting.JVM) jvmTest.dependencies {
            implementation(kotlin("test-junit5"))
        }
    }
}

tasks.named("wasmJsTestTestDevelopmentExecutableCompileSync").configure {
    mustRunAfter(tasks.named("jsBrowserTest"))
    mustRunAfter(tasks.named("jsNodeTest"))
}