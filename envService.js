angular.module('rtfmApp').service('envService', function envService($location, $timeout) {
   
    var gUserName = '';
    this.createUser = function(email, password, username){
    var ref = new Firebase("https://stevetest1.firebaseio.com");
        ref.createUser({
            email    : email,
            password : password,
            username: username
        }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
            $timeout(function(){
                $location.path('/login');
            });
        
        } else {
            ref.child('user').child(userData.uid).set(userData);
            ref.child('user').child(userData.uid).child('username').set(username);
        console.log("Successfully created user account with uid:", userData.uid);
            gUserName = username;  
            $timeout(function(){
                $location.path('/threads'); 
            })
        }
    });
    }
    
    this.globalUserName = function(){
        return gUserName;
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
                    $timeout(function(){
                        $location.path('/login');
                    })
   			} else {
                
     		 console.log("Authenticated successfully with payload:", authData);
                $timeout(function(){
                    $location.url("/threads");
                })
             
                
   			}
        });
        
    }
});