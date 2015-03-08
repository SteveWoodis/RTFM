var app = angular.module('drawWorksApp');
app.controller('conRegController', function($scope, envService){
    $scope.newUser = {};
    $scope.regContractors = [
        {contractorId: 1, contractorName: 'General Contractor'},
        {contractorId: 2, contractorName: 'Sub-Contractor'}
    ];
    $scope.newUser.reg_contractorId = 1;
    
    $scope.registerMe = function(){
        var newUser = $scope.newUser;   
        envService.createUser(newUser);
    }
})