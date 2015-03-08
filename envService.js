angular.module('drawWorksApp').service('envService', function envService($location, $timeout) {
   
    var gUserName = '';
    this.createUser = function(newUserData){
        gUserName = newUserData.reg_email;
        console.log(newUserData.reg_email);
        
    var ref = new Firebase("https://drawworks.firebaseio.com");
        ref.createUser({
            email    : newUserData.reg_email,
            password : newUserData.reg_password,
            username: newUserData.reg_username
        }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
            $timeout(function(){
                $location.path('/login');
            });
        
        } else {
            ref.child('user').child(userData.uid).set(newUserData);
        console.log("Successfully created user account with uid:", userData.uid);
            console.log(newUserData.reg_email);
            $timeout(function(){
                $location.path('/aboutMe'); 
            })
        }
    });
    }
    
    this.globalUserName = function(){
        return gUserName;
    }

    this.getUserName = function(email, password, username){
    var ref = new Firebase("https://drawworks.firebaseio.com");
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