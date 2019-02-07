node('slave') {
    def payload = readJSON text:"$payload"
    def mvnHome
    // testing lets hope this
    stage('Preparation') {
        // Maven
        git credentialsId: '09eefd18-6e26-4f72-951a-a9c2eaa2dfa8',
                url: 'https://github.com/primetrain/LicenseManagementSystem'
        mvnHome = tool 'M3'
    }

    stage('Compile') {
        // Run the maven compile
        sh "'${mvnHome}/bin/mvn' clean compile -P env-dev"
    }

    stage('Test') {
        // Run the maven test
        sh "'${mvnHome}/bin/mvn' test"
    }

    if (payload.ref == 'refs/heads/master') {
        stage('Package') {
            // Run the maven package
            sh "'${mvnHome}/bin/mvn' package -P env-dev"
        }

        stage('Install') {
            // Run the maven package
            sh "sudo '${mvnHome}/bin/mvn' install -P env-dev"
        }

        stage('restart service'){
            sh "cp target/final.jar ~/services/final.jar"
            sh "chmod 500 '/home/ubuntu/services/final.jar'"
            sh "sudo service license restart"
        }
    }
}