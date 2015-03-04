angular.module('rtfmApp').service('envService', function envService() {
    
//      this.getEnv= function () {
//        return $window.env;
//      }
//    
//    this.saveUserName = function(username){
//    	$window.localStorage.setItem('username', username);
//    }
//    this.getUserName = function(){
//    	return $window.localStorage.getItem('username');
//    }
    var createUser = function(email, password){
    var ref = new Firebase("https://stevetest1.firebaseio.com");
        ref.createUser({
            email    : "email",
            password : "password"
        }, function(error, userData) {
        if (error) {
        console.log("Error creating user:", error);
        } else {
        console.log("Successfully created user account with uid:", userData.uid);
        }
    });
    }
    
    
    var ref = new Firebase("https://stevetest1.firebaseio.com");
	 	ref.authWithPassword({
   			email    : "email",
   			password : "password"
	 	}, function(error, authData) {
   			if (error) {
    		 		console.log("Login Failed!", error);
   			} else {
     		console.log("Authenticated successfully with payload:", authData);
   			}
	 });
});