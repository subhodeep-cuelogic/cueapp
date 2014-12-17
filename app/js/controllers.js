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

    $scope.$on('loggedin',function() {
      
      if($rootScope.loggedInUser) {
        $scope.loggedInUser = $rootScope.loggedInUser;
      }

      if($rootScope.isLoggedIn) {
        $scope.isLoggedIn = $rootScope.isLoggedIn;
      }

    });
    
    console.log($scope.loggedInUser);


    
  }])

    .controller('homeCtrl', ['$scope', '$location','$rootScope', function($scope, $location, $rootScope) {
  	   $scope.hello ="Hello World";
       $scope.$location = $location;
       $rootScope.$broadcast('loggedin');
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
          loginService.login(user,$scope,$location,$rootScope).then(function(msg){
            if(msg.data == 'success')
            {
              //console.log("Successful Login");
              $scope.msgtxt = "Correct Credentials";
              $rootScope.loggedInUser = user.email;
              $rootScope.isLoggedIn = true;
              //console.log(rootScope.loggedInUser);

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
    .controller('logoutCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
          
          $scope.logout = function() {
            $rootScope.loggedInUser = null;  
            $rootScope.isLoggedIn = false;                                                                                                                                                                                                                                              

            //console.log($rootScope.loggedInUser);

            $location.path('/login');
          }


    }])
    ;
  