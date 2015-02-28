var app = angular.module('rtfmApp');
app.controller('loginController',function($scope, envService, $location){
	$scope.logMeIn = function(username){
		envService.saveUserName(username);
		$location.path('/threads');
	}

     
    
})