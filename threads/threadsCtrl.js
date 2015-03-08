var app = angular.module('drawWorksApp');
app.controller('threadsCtrl', function($scope, threadsRef, envService){
	$scope.threads = threadsRef.$asArray();
	
	 $scope.threads.$loaded().then(function (threads) {
       
     // console.log(threads);
    });

	$scope.createThreads = function(){
        var username = envService.globalUserName();
		console.log(username);
		$scope.threads.$add({
			username: username,
			title: $scope.title
		})
	}
})