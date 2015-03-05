var app = angular.module('rtfmApp');
app.controller('loginController',function($scope, envService, $location){
	
    $scope.logMeIn = function(){
        var username = $scope.log_email;
		envService.getUserName(username, $scope.log_password);
        $scope.log_email = '';
        $scope.log_username = '';
        $scope.log_password = '';
		
	}
    $scope.registerMe = function(){
     envService.createUser($scope.reg_email, $scope.reg_password, $scope.reg_username);
       
    }
     
    
})