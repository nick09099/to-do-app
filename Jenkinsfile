pipeline {
    agent any

    environment {
        IMAGE = 'nikki3/todo-app'
        TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nick09099/to-do-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE}:${TAG}")
                }
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    script {
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
                            dockerImage.push()
                        }
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f todo || true'
                sh "docker run -d --name todo -p 8080:8080 ${IMAGE}:${TAG}"
                sh 'curl -I http://localhost:8080/todos'
            }
        }
    }
}
