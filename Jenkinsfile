pipeline {
    agent any
    tools {nodejs "NODEJS"}
    environment {
        IMAGE_REPO_NAME="donascimentomarcelo/app-aws"
        IMAGE_TAG="${env.BUILD_ID}"
	      DOCKER_HUB_LOGIN = credentials('docker-hub')
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages {
      stage('Install') {
        steps { sh 'npm install' }
      }

      // stage('Node Version') {
      //   steps { sh 'npm version' }
      // }

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
          sh 'docker system prune -a -f'
          script {
            dockerImage = docker.build "${IMAGE_REPO_NAME}:latest"
          }
        }
      }

      stage('Pushing to Dockerhub') {
        steps{
            sh 'docker login --username=$DOCKER_HUB_LOGIN_USR --password=$DOCKER_HUB_LOGIN_PSW'
            sh 'docker push ${IMAGE_REPO_NAME}:latest'
          // script {
          //   docker.withRegistry("", registryCredential) {
          //     dockerImage.push()
          //   }
          // }
        }
      }

      stage('Deploy CloudFormation') {
        steps {
          script {
            withAWS(credentials: 'aws-credentials', region: 'us-east-1') {
              sh 'aws cloudformation deploy --stack-name app-aws --template-file ecs.yaml'
            }
          }
        }
      }

      stage('Cleaning up') {
        steps{
          sh "docker rmi ${IMAGE_REPO_NAME}:latest"
        }
      }
    }
}
