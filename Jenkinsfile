pipeline {
    agent any

    tools {
        nodejs 'nodejs20'  // Ensure this matches Jenkins tool name
    }

    environment {
        IMAGE_NAME = 'siku86/todo-app'   // Docker image name
        IMAGE_TAG = '1.0.0'               // Can change to BUILD_NUMBER if desired
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/sikander-riaz/DevOps-assignment-1'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests & Generate Coverage') {
            steps {
                sh 'npm test -- --coverage'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    withCredentials([string(credentialsId: 'gen-token', variable: 'SONAR_TOKEN')]) {
                        withEnv(["PATH+SONAR=${tool 'sonarqube'}/bin"]) {
                            sh '''
                                sonar-scanner \
                                  -Dsonar.projectKey=todo \
                                  -Dsonar.sources=. \
                                  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                                  -Dsonar.login=${SONAR_TOKEN}
                            '''
                        }
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-token', variable: 'DOCKER_TOKEN')]) {
                    sh '''
                        echo "${DOCKER_TOKEN}" | docker login -u siku9786 --password-stdin
                        docker push ${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        }
    } // The 'stages' block ends here

    post {
        always {
            echo 'Cleaning up Docker resources...'
            
            // Remove the image built
            sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
            
            // Prune dangling images, stopped containers, and unused networks
            sh "docker system prune -f --volumes"
        }
    }
}