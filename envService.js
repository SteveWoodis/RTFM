angular.module('rtfmApp').service('envService', function envService() {
    
    this.createUser = function(email, password, username){
    var ref = new Firebase("https://stevetest1.firebaseio.com");
        ref.createUser({
            email    : email,
            password : password,
            username: username
        }, function(error, userData) {
        if (error) {
        console.log("Error creating user:", error);
        } else {
        console.log("Successfully created user account with uid:", userData.uid);
        }
    });
    }

    this.getUserName = function(email, password, username){
    var ref = new Firebase("https://stevetest1.firebaseio.com");
	 	ref.authWithPassword({
            email:email,
            password:password,
            username: username
	 	}, function(error, authData) {
   			if (error) {
    		 		alert("Login Failed!", error);
   			} else {
     		console.log("Authenticated successfully with payload:", authData);
   			}
            console.log(authData);
	 });
        
    }
});