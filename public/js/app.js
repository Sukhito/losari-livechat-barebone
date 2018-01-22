var app = angular.module('suus',['ui.router','ui.bootstrap','firebase']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

        .state('items',{
            url: '/items',
            templateUrl: 'js/items/index.html',
            controller: 'ItemsCtrl'
        })
        .state('login',{
            url: '/login',
            templateUrl: 'js/login/login.html',
            controller : 'LoginCtrl'
        })
    
    $locationProvider.hashPrefix('');
});