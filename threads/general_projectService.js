var app = angular.module('drawWorksApp');
app.factory('projectService', function(envService, $firebaseObject){
	var firebaseUrl = "https://drawworks.firebaseio.com";

	return {

			getProjects: function(){
				return new Firebase('https://drawworks.firebaseio.com' + '/threads');
			},
			getProject: function(threadId){
				return new Firebase(firebaseUrl + '/general_projects/' + threadId);
			},
			getComments: function(threadId){
				return new Firebase(firebaseUrl + '/general_projects/' + threadId + '/comment');
			}
	}
})


