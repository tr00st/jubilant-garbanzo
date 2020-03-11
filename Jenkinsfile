pipeline {
    // Node 10.x Requirement

    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'yarn install --frozen-lockfile'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Archive') {
            steps {
                echo 'Archiving....'
                archiveArtifacts 'build/**.*'
            }
        }
    }
}
