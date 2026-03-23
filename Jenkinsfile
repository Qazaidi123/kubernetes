pipeline {
  agent any
  stages {
    stage (clone git repo) {
      steps {
       url: "https://github.com/Qazaidi123/kubernetes.git" , branch: "main" 
      }
    stage (EKS cluster deploy) {
      steps {
        sh " aws eks --region ap-south-1 update-kubeconfig --name ekscluster "
        sh " kubectl get pods "
      }
    }
    }
  }
}
