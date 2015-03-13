var app = angular.module('drawWorksApp');
app.factory('threadService', function(envService, $firebaseObject){
	var firebaseUrl = "https://drawworks.firebaseio.com";

	return {

			getThreads: function(){
				return new Firebase('https://drawworks.firebaseio.com' + '/threads');
			},
			getThread: function(threadId){
				return new Firebase(firebaseUrl + '/threads/' + threadId);
			},
			getComments: function(threadId){
				return new Firebase(firebaseUrl + '/threads/' + threadId + '/comment');
			}
	}
})


//var ref = new Firebase("https://drawworks.firebaseio.com");