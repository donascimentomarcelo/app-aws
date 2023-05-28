pipeline {
    agent any
    tools {nodejs "node"}
    triggers {
        githubPush()
        pollSCM '* * * * *'
    }
    stages {
      stage('Install') {
        steps { sh 'npm install' }
      }

      stage('Test') {
        parallel {
          stage('Static code analysis') {
              steps { sh 'npm lint' }
          }
          stage('Unit tests') {
              steps { sh 'npm test' }
          }
        }
      }

      stage('Build') {
        steps { sh 'npm run build' }
      }
    }
}
