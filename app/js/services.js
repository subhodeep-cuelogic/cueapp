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
			//console.log($promise);
			return $promise;
		}
	}	
});