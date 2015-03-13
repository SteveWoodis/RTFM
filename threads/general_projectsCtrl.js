var app = angular.module('drawWorksApp');
app.controller('general_projectsCtrl', function($scope, projectsRef, $firebaseArray, envService){
    var username;
    var syncObject = envService.getUser();
    syncObject.$bindTo($scope, "userProfile").then(function(){
        username = $scope.userProfile.reg_username;
        
    }); 
    
	$scope.projects = $firebaseArray(projectsRef);
	$scope.projects.$loaded().then(function (projects) {
    });

	$scope.createProjects = function(){
        //var username = envService.globalUserName();
        console.log(username);
		$scope.projects.$add({
			username: username,
			title: $scope.title
		})
        $scope.title = '';
	}
})