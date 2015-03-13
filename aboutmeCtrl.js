var app = angular.module('drawWorksApp');
  app.controller('aboutMeCtrl',function($scope, $q, envService){
      var User = {};
      var syncObject = envService.getUser();           
    syncObject.$bindTo($scope, "userProfile").then(function(){
              User = $scope.userProfile;
            console.log(User);
      });
      
      $scope.firstname = User.reg_firstname; 
      console.log('User ', User);;
      
})