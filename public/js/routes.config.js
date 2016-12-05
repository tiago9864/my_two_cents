(function() {
  angular.module('two-cents')
    .config(RouterConfiguration);

    RouterConfiguration.$inject = ['$routeProvider'];

    function RouterConfiguration($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'html/views/home.html',
          controller: "HomeController"
        })
        .when('/login', {
          templateUrl: 'html/views/login.html',
          controller: "LoginController"
        })
        .when('/signup', {})
        .when('/profile/:username', {})
        .otherwise({
          redirectTo: '/'
        })
    }
}());
