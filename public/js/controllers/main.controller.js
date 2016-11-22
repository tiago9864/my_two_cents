
(function() {
  angular.module('my_two_cents') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService']; //what tools the MainController function needs

  function MainController($scope, PostService){ //$scope is our bridge to the dom
    $scope.boxes = PostService.get();
    $scope.createPost = createPost;
    $scope.deletedPost = deletedPost;
    $scope.editPost = editPost;
    $scope.savePost = savePost;


    $scope.$watch(function(){
  return PostService.get();
}, function(){
    $scope.posts = PostService.get();
});
  function createPost(newPost){
    PostService.create(newPost);
    $scope.newPost = '';
  }
  function deletedPost(index, post){
    PostService.delete(index, post);
  }
  function editPost(post){
    post.isBeingEdited = true;
  }
  function savePost(index, post){
    PostService.update(index, post);//removed the .dec coz data is on the service
    post.isBeingEdited = false;
  }

}
}());
