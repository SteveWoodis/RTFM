var app = angular.module('drawWorksApp');
  app.controller('aboutMeCtrl',function($scope, envService){
  var syncObject = envService.getUser();
    syncObject.$bindTo($scope, "userProfile").then(function(){
        console.log($scope.userProfile);
    });
      
})