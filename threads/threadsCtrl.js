var app = angular.module('drawWorksApp');
app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, envService){
    var username;
    var syncObject = envService.getUser();
    syncObject.$bindTo($scope, "userProfile").then(function(){
        username = $scope.userProfile.reg_username;
    }); 
	$scope.threads = $firebaseArray(threadsRef);
	$scope.threads.$loaded().then(function (threads) {
    });

	$scope.createThreads = function(){
        //var username = envService.globalUserName();
        
		$scope.threads.$add({
			username: username,
			title: $scope.title
		})
        $scope.title = '';
	}
})