var app = angular.module('rtfmApp');
app.factory('threadService', function(envService, $firebase){
	var firebaseUrl = envService.getEnv().firebase;

	return {

			getThreads: function(){
				return $firebase(new Firebase(firebaseUrl + '/threads'));
			},
			getThread: function(threadId){
				return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
			},
			getComments: function(threadId){
				return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comment'));
			}
	}
})