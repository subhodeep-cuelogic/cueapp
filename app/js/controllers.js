'use strict';

/* Controllers */

  
angular.module('myApp.controllers', [])
  
  .controller('headerCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.loc = $location;
    $scope.newloc = $location;
    //$scope.jim = "HI JIM";
    //$scope.name = "Subhodeep";
    $scope.loggedInUser = null;
    $scope.isLoggedIn = false;

    if($rootScope.loggedInUser)
      $scope.loggedInUser = $rootScope.loggedInUser;

    if($rootScope.isLoggedIn)
      $scope.isLoggedIn = $rootScope.isLoggedIn;
    
    console.log($scope.loggedInUser);


    
  }])

    .controller('homeCtrl', ['$scope', '$location', function($scope, $location) {
  	   $scope.hello ="Hello World";
       $scope.$location = $location;
    }])
    .controller('aboutCtrl', ['$scope', '$location', function($scope, $location) {
  	   $scope.showText ="aboutCtrl";
       $scope.$location = $location;
       //console.log($location.path());
    }])

    .controller('joinCtrl', ['$scope', '$location', function($scope, $location) {
		    $scope.showText ="joinCtrl";
        $scope.$location = $location;
    }])

    .controller('clientCtrl', ['$scope', '$location', function($scope, $location) {
		    $scope.showText ="clientCtrl";
        $scope.$location = $location;
    }])

    .controller('loginCtrl', ['$scope', 'loginService', '$location', '$rootScope', function($scope, loginService, $location, $rootScope) 
    {
        //$scope.user = { email:'Enter your name', password: 'pwd'};
        //alert("hello");
        $scope.msgtxt = '';
        $scope.checkLogin = function(user) {
          //console.log("Enter function");
          loginService.login(user,$scope,$location,$rootScope);
          //console.log($rootScope.loggedInUser);
          
        }
    }])
    .controller('logoutCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
          
          $scope.logout = function() {
            $rootScope.loggedInUser = null;  
            $rootScope.isLoggedIn = false;  
            $scope.isLoggedIn = $rootScope.isLoggedIn;                                                                                                                                                                                                                                                  

            //console.log($rootScope.loggedInUser);

            $location.path('/login');
          }


    }])
    ;
  