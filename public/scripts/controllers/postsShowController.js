PostsShowController.$inject = ["$location", "$http", "$routeParams"];

function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {};

  var postId = $routeParams.postId;
  var cityId = $routeParams.cityId;
  console.log('this is postId: ', postId);
  console.log('this is the cityId: ', cityId);
  console.log('this is the $routeParams : ', $routeParams);

  //rename get function to be getPost
  getPost(); // fetch one post (show)

  function getPost() {
    $http
      .get('/api/cities/' + cityId + '/posts/' + postId)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.post = response.data;
    }

    function onGetError(response){
      console.error("Failed to get tacos", response);
      $location.path("/api/cities/" + cityId);
    }
  };
}
