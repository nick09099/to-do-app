pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

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
        stage('Build & Run') {
            steps {
                sh 'npm run build || echo "No build step defined"'
                sh 'node app.js &'
            }
        }
    }
}
