(function() {
  angular.module('two-cents')
      .directive('postSummary', PostSummaryDirective);

  PostSummaryDirective.$inject = [];

  function PostSummaryDirective(){
    return {
      restricted: 'EA',
      controller: "PostController",
      templateUrl: 'js/directives/postSummary/post.view.html',
      scope:{
        data:'<'
      }
    };

  }
}());
