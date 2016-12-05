(function() {
  angular.module('two-cents')
    .run(AuthConfig);

  AuthConfig.$inject = [];

  function AuthConfig(){}
}());
