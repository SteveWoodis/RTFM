var app = angular.module('rtfmApp');
app.controller('threadsCtrl', function($scope, threadsRef){
	$scope.threads = threadsRef.$asArray();
	
	 $scope.threads.$loaded().then(function (threads) {
         console.log("I made it to threads");
     // console.log(threads);
    });

	$scope.createThreads = function(username, title){
		console.log(username);
		//$scope.threads.$add({
		//	username: $scope.username,
		//	title: $scope.newThreadsTitle
		//})
	}
})