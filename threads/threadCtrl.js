angular.module('drawWorksApp')
  .controller('ThreadCtrl', function ($scope, threadRef, $firebaseArray, $firebaseObject, commentsRef, envService) {
     var username;
    var syncObject = envService.getUser();
    syncObject.$bindTo($scope, "userProfile").then(function(){
        username = $scope.userProfile.reg_username;
        console.log(username);
    }); 

     //$scope.thread = $firebaseArray(threadRef);
     //$scope.thread.$loaded().then(function (thread){
     //});
    
    //thread.$bindTo($scope, "thread").then(function(){
        
    //});
    $scope.comments = $firebaseArray(commentsRef);
    //console.log(thread);
    
    $scope.createComment = function(){
       
    	$scope.comments.$add({
    		username: username,
    		text: $scope.newCommentText
    	});
        $scope.newCommentText = '';    
    };
  });