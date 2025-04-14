pipeline {
    agent any

    environment {
        PORT = '3000'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Docker Build & Push') {
            steps {
                script {
                    def imageName = "nikki3/to-do-app"
                    sh "docker build -t ${imageName}:latest ."
                    sh "docker push ${imageName}:latest"
                }
            }
        }
    }
}
