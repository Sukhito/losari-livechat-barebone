
app.controller('LoginCtrl',function($scope){
    $scope.signUp = function(){
        firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });  
    }

    $scope.login = function(){
        firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }
});

