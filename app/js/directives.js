'use strict';

/* Directives */


angular.module('myApp.directives', [])

 .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  
  .directive('headerSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/header.html'
    };
  })

  .directive('headerMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/header_menu.html'
    };
  })

  .directive('headerBanner', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/banner.html'
    };
  })

  .directive('footerSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/footer.html'
    };
  })

  .directive('loginSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/login_template.html'
    }
  })


  .directive('trackActive', function($location) {
    function link(scope, element, attrs){
        scope.$watch(function() {
            return $location.path();
        }, function(){
            var links = element.find('a');
            links.removeClass('current');
            angular.forEach(links, function(value){
                var a = angular.element(value);
                if (a.attr('href') == '#' + $location.path() ){
                    a.addClass('current');
                }
            });
        });
    }
    return {link: link};
});

  

