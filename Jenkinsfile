pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                git url: 'https://github.com/sayfalah/dockerQwikNginxNodePostgreSQL.git ', branch: 'main'
            }
        }

   stage('Build frontend') {
            steps {
                dir('NodeBackend') {
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
