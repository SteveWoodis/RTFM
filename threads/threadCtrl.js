angular.module('drawWorksApp')
  .controller('ThreadCtrl', function ($scope, threadRef, commentsRef, envService) {
     var username = envService.globalUserName();
        $scope.username = username;

     var thread = threadRef.$asObject();
    thread.$bindTo($scope, 'thread');
    $scope.comments = commentsRef.$asArray();
    console.log(thread);
    
    $scope.createComment = function(){
       
        console.log(username);
    	$scope.comments.$add({
    		username: username,
    		text: $scope.newCommentText
    	});
            
    };
  });