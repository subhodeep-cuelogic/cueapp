'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

//angular.module('myApp.services', []).
//  value('version', '0.1');

var myApp = angular.module('myApp.services', []);

myApp.value('version','0.1');

myApp.factory('loginService', function ($http) {
	return {
		login:function (user, scope, location, rootScope){
			//console.log('Enter function service');
			var $promise = $http.post('data/user.php', user);
			$promise.then (function(msg) {
				//console.log(msg);
				if(msg.data == 'success')
				{
					//console.log("Successful Login");
					scope.msgtxt = "Correct Credentials";
					rootScope.loggedInUser = user.email;
					rootScope.isLoggedIn = true;
					//console.log(rootScope.loggedInUser);

					//$location.path('home');
					location.path("/home");
				}
				else
				{
					//console.log("Error Login");
					scope.msgtxt = "Wrong Credentials";
				}
			});
		}
	}	
});