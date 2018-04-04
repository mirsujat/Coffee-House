* 1: In your root build.gradle, update the Gradle plugin so that it uses Gradle 3+:

```...
dependencies {
    classpath 'com.android.tools.build:gradle:2.3.0'
...
```

* 2: Then, in your app/build.gradle, update the build tools to the latest (25), because it's mandatory to support Gradle 3+:

```...
android {
    compileSdkVersion 23
    buildToolsVersion '25.0.2'
...
```
