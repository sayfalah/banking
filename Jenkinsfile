pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                git url: 'https://github.com/sayfalah/banking', branch: 'main'
            }
        }

   stage('Build frontend') {
            steps {
                dir('FRONTEND') {
                    sh 'bin/npm install'
                   
                }
            }
        }
        /*
         stage('Run SonarQube Analysis') {
    steps {
        dir('NodeBackend') {
            script {
                def scannerHome = tool 'SonarQube'

                withSonarQubeEnv('SonarQube') {
                   sh "${scannerHome}/bin/sonar-scanner "
                }
            }
        }
    }
}

    }

   
}
    }
