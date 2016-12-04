(function() {
  angular.module('two-cents')
    .config(RouterConfiguration);

    RouterConfiguration.$inject = ['$routeProvider'];

    function RouterConfiguration($routeProvider){
      $routeProvider
        .when('/', {})
        .when('/login', {})
        .when('/signup', {})
        .when('/profile/:username', {})
        .otherwise({
          redirectTo: '/'
        })
    }
}());
