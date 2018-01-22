var config = {
    apiKey: "AIzaSyB2XJAK5TWl-5esiaooqVzZ6Ia-0C9lYnE",
    authDomain: "losari-967e3.firebaseapp.com",
    databaseURL: "https://losari-967e3.firebaseio.com",
    projectId: "losari-967e3",
    storageBucket: "losari-967e3.appspot.com",
    messagingSenderId: "712417546175"
  };
firebase.initializeApp(config);

app.controller('ItemsCtrl',function($scope,$firebaseArray){
    //connect with root database
    const ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function(){

        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        })

        $scope.messageText = "";
    }
})