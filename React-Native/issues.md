#### Issue 1: react-native run-android - Error: File path too long on Windows, keep below 240 characters
  or npm run android - Error: File path too long on Windows, keep below 240 characters

#### solution:

Change your build directory for your project since that is where most of the path issues will arise.
In your root build.gradle file

```
    allprojects {

     buildDir = "C:/tmp/${rootProject.name}/${project.name}"

     repositories {

         ...

        }
    }
```

#### Issue 2: Failed to crunch file - Android studio (app:mergeDebugResources)
  Failed to crunch file means studio can't process the file. Its too long and it has reached the max file path line of the operating system.

#### Solution:

Better way is to change the build directory of the project in the build.gradle file (Project)

```
    allprojects {

        buildDir = "C:/tmp/${rootProject.name}/${project.name}"

        repositories {

        ...

        }
    }
```

#### Issue 3: failed to find target with hash string 'android-26'

#### workaround: 

```
add the following code in your root build.gradle and ## not the app/build.gradle.

subprojects {
    ext {
        compileSdk = 25
        buildTools = "25.0.1"
        minSdk = 19
        targetSdk = 25
    }

    afterEvaluate { project ->
        if (!project.name.equalsIgnoreCase("app")
                && project.hasProperty("android")) {
            android {
                compileSdkVersion compileSdk
                buildToolsVersion buildTools
                defaultConfig {
                  minSdkVersion minSdk
                  targetSdkVersion targetSdk
                }
            }
        }
    }
}
```

Also if anyone read this, if you implement the workaround make sure you put the "workaround" in your root build.gradle and not the app/build.gradle. This does make THIS library work.

## [Unfortunately, broke some other stuff though.]
