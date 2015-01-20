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
  
.directive('activeLink', function($location) {

    var link = function(scope, element, attrs) {

        scope.$watch(function() { return $location.path(); }, 
        function(path) {
          console.log(path);
            var url = element.find('a').attr('href');
            if (url) {
                url = url.substring(1);
            }

            if (path == url) {
                element.addClass("nav_active");
            } else {
                element.removeClass('nav_active');
            }

        });
    };

    return {
        restrict: 'A',
        link: link
    };
});

  

