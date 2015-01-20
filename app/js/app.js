'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});		
  $routeProvider.when('/about-us', {templateUrl: 'partials/about_us.html', controller: 'aboutCtrl'});
  $routeProvider.when('/join-us', {templateUrl: 'partials/join_us.html', controller: 'joinCtrl'});
  $routeProvider.when('/cuelogic/clients', {templateUrl: 'partials/clients.html', controller: 'clientCtrl'});
  $routeProvider.when('/terms-and-conditions', {templateUrl: 'partials/terms_and_conditions.html', controller: 'termsCtrl'});
  //$routeProvider.when('/logout', {templateUrl: 'partials/login.html', controller: 'logoutCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]).
run(function($rootScope, $location, $cookieStore) {
  $rootScope.loggedInUser = $cookieStore.get('loggedInUserCookie');
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {    
    if ($rootScope.loggedInUser == null) {
      // no logged user, redirect to /login
      if ( next.templateUrl === "partials/login.html") {
      } else {
        $location.path("/login");
      }
    }
  });
});
