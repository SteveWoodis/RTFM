var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('', {
     templateUrl: '/threads/:threadId',
        controller: 'threadsCtrl'
    })
    .otherwise({
        redirectTo: '/login'
    })
    });