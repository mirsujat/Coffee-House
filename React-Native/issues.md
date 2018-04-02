#### Issue 1: react-native run-android - Error: File path too long on Windows, keep below 240 characters
or npm run android -  Error: File path too long on Windows, keep below 240 characters

#### solution: 
Change your build directory for your project since that is where most of the path issues will arise. 
In your root build.gradle file


allprojects {

    buildDir = "C:/tmp/${rootProject.name}/${project.name}"
    
    repositories {
    
       ...
       
    }   
}




#### Issue 2: Failed to crunch file - Android studio (app:mergeDebugResources)
Failed to crunch file means studio can't process the file. Its too long and it has reached the max file path line of the operating system.

#### Solution: 

Better way is to change the build directory of the project in the build.gradle file (Project)


allprojects {

    buildDir = "C:/tmp/${rootProject.name}/${project.name}"
    
    repositories {
    
       ...
       
    }
}



