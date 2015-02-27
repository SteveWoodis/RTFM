var app = angular.module('rtfmApp');
app.controller = ('mainController', function($scope, $firebase){

$scope.test = 'this is a test';
console.log('in main Controller');
})