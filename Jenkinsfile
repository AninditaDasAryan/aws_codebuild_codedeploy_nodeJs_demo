pipeline {
    agent any
    tools {nodejs "Node17" }
    environment {
        NODE_ENV='production'
    }
    
  
    stages {
        stage('source') {
            steps {
               git 'https://github.com/sd031/aws_codebuild_codedeploy_nodeJs_demo.git'
               sh 'cat index.js'
            }
            
        }
        
         stage('build') {
             environment{
                 NODE_ENV='StagingGitTest'
             }
             
            
            steps {
             echo NODE_ENV
             withCredentials([string(credentialsId: '12daf354-292f-4031-b386-f11ffa2a3eac', variable: 'secretvar')]) {
                // some block
                echo secretvar
            }
                         sh 'npm install'
            }
            
        }
        
         stage('saveArtifact') {
            steps {
              archiveArtifacts artifacts: '**', followSymlinks: false
            }
            
        }
        
        
        
    }
}
