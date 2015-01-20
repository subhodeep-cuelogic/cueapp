'use strict';

/* Controllers */

  
angular.module('myApp.controllers', [])
  
  .controller('headerCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    
    //$scope.loggedInUser = $rootScope.loggedInUser;
    if($rootScope.loggedInUser) {
        $scope.loggedInUser = $rootScope.loggedInUser;
        $scope.isLoggedIn = true;
      } else {
        $scope.loggedInUser = null;
        $scope.isLoggedIn = false;
      }

    $scope.$on('loggedin',function() {
      
      if($rootScope.loggedInUser) {
        $scope.loggedInUser = $rootScope.loggedInUser;
        $scope.isLoggedIn = true;
      }

      if($rootScope.isLoggedIn) {
        $scope.isLoggedIn = $rootScope.isLoggedIn;
      }else {
    	  $scope.isLoggedIn = false;
      }

    });
    
    //console.log($scope.loggedInUser);

    //console.log($location.path());


    
  }])

    .controller('homeCtrl', ['$scope', '$location','$rootScope', function($scope, $location, $rootScope) {
  	    $rootScope.$broadcast('loggedin');
  	    $scope.username = $rootScope.loggedInUser;
    }])
    .controller('aboutCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
  	   $rootScope.$broadcast('loggedin');
  	   console.log($rootScope.loggedInUser);
  	   $scope.username = $rootScope.loggedInUser;
    }])

    .controller('joinCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
        $rootScope.$broadcast('loggedin');
        $scope.username = $rootScope.loggedInUser;
    }])
    .controller('clientCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
        $rootScope.$broadcast('loggedin');
        $scope.username = $rootScope.loggedInUser;
    }])
    .controller('loginCtrl', ['$scope', '$cookieStore', 'loginService', '$location', '$rootScope', function($scope, $cookieStore, loginService, $location, $rootScope) 
    {
        //$scope.user = { email:'Enter your name', password: 'pwd'};
        //alert("hello");
        $scope.msgtxt = '';
        $rootScope.$broadcast('loggedin');
        $scope.checkLogin = function(user) {
          //console.log("Enter function");
          loginService.login(user,$scope,$location,$rootScope).then(function(msg){
            //console.log(msg);
            if(msg.data.responseval == 'success')
            {
              //console.log("Successful Login");
              $scope.msgtxt = "Correct Credentials";
              $rootScope.loggedInUser = msg.data.firstname;
              $rootScope.isLoggedIn = true;
              //console.log(rootScope.loggedInUser);

              $cookieStore.put('loggedInUserCookie', $rootScope.loggedInUser);

              //$location.path('home');
              $location.path("/home");
            }
            else
            {
              //console.log("Error Login");
              $scope.msgtxt = "Wrong Credentials";
            }
          });
          //console.log($rootScope.loggedInUser);
          
        }
    }])
    .controller('logoutCtrl', ['$scope', '$location', '$rootScope', '$cookieStore', function($scope, $location, $rootScope, $cookieStore) {
          
          $scope.logout = function() {
            $rootScope.loggedInUser = null;  
            $rootScope.isLoggedIn = false;
            $cookieStore.remove('loggedInUserCookie'); 
            $location.path('/login');
          }


    }])
    ;
  