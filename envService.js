angular.module('rtfmApp').service('envService', function envService($window) {
    
      this.getEnv= function () {
        return $window.env;
      }
    
    this.saveUserName = function(username){
    	$window.localStorage.setItem('username', username);
    }
    this.getUserName = function(){
    	return $window.localStorage.getItem('username');
    }

 //   var ref = new Firebase("https://stevetest1.firebaseio.com");
	// 	ref.authWithPassword({
 //  			email    : "email",
 //  			password : "password"
	// 	}, function(error, authData) {
 //  			if (error) {
 //   		 		console.log("Login Failed!", error);
 //  			} else {
 //    		console.log("Authenticated successfully with payload:", authData);
 //  			}
	// });
});