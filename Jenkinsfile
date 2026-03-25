pipeline {
  agent any

  environment {
    SONAR_HOME = tool "Sonar"
    IMAGE_NAME = "qazaidi123/kubeimage"
    IMAGE_TAG = "${BUILD_NUMBER}"
    DOCKER_CREDS = credential('dockerhub-creds')
  }
  stages {
    stage("clone git repo") {
      steps {
       git url:"https://github.com/Qazaidi123/kubernetes.git" , branch:"main" 
      }
    }

    stage("SonarQube Analysis") {
      steps {
        withSonarQubeEnv("Sonar") {
          sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=NETLIPROJ -Dsonar.projectKey=NETLIPROJ"
        }
      }

    }

    stage ("Build") {
      steps {
        sh " docker build -t $IMAGE_NAME:$IMAGE_TAG . "
      }
    }

    stage ("image check") {
      steps {
        sh "trivy image --severity CRITICAL --exit-code 0 $IMAGE_NAME:$IMAGE_TAG"
      }
    }

    stage ("Image push to DockerHub") {
      steps {
        sh " echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USER --password-stdin "
        sh " docker push $IMAGE_NAME:$IMAGE_TAG "
      }
    }
    stage ("EKS cluster deploy") {
      steps {
        withAWS(credentials: 'aws-creds') {
        sh " aws eks --region ap-south-1 update-kubeconfig --name ekscluster "
        sh " kubectl get pods "
        sh " sed -i 's|IMAGE_PLACEHOLDER|$IMAGE_NAME:$IMAGE_TAG|g' K8s/deployment.yaml"
                  sh " kubectl apply -f k8s/deployment.yaml"
                  sh " kubectl apply -f k8s/service.yaml"
        }
      }
    }
  }
}
