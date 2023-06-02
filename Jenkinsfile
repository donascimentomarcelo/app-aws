pipeline {
    agent any
    tools {nodejs "NODEJS"}
    environment {
        IMAGE_REPO_NAME="donascimentomarcelo/app-aws"
        IMAGE_TAG="${env.BUILD_ID}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
	      registryCredential = credentials('docker-hub')
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages {
      stage('Install') {
        steps { sh 'npm version' }
        steps { sh 'npm install' }
      }

      stage('Test') {
        parallel {
          stage('Static code analysis') {
              steps { sh 'npm run lint' }
          }
          stage('Unit tests') {
              steps { sh 'npm test' }
          }
        }
      }

      stage('Build') {
        steps { sh 'npm run build' }
      }

      stage('Build Docker Image') {
        steps{
          script {
            dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
          }
        }
      }

      stage('Pushing to Dockerhub') {
        steps{
          script {
            docker.withRegistry("", registryCredential) {
              dockerImage.push()
            }
          }
        }
      }
    }
}
