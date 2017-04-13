PostsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.post = {}; // form data

console.log('this is the params : ', $routeParams );
  var cityId = $routeParams.cityId;
  console.log('this is the city id :', cityId);
  var postId = $routeParams.postId;
  console.log('this is post id  :', postId);
  get(); // fetch one post (show)

  ////

  function update() {
    $http
      .put('/api/cities/' + cityId + '/posts/' + postId, vm.post)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response){
      $location.path('/api/cities/' + cityId + '/posts/');
    }

    function onUpdateError(response){
      console.error("Failed to update post", response);
    }
  }

  function destroy() {
    $http
      .delete('/api/posts/' + postId)
      .then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response){
      $location.path("/");
    }

    function onDeleteError(response){
      console.error("Failed to delete post", response);
    }
  }

  function get() {
    $http
      .get('/api/posts/' + postId)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.post = response.data;
    }

    function onGetError(response){
      console.error("Failed to get post", response);
      $location.path("/");
    }
  };
}
