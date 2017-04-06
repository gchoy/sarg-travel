PostsNewController.$inject = ["$location", "$http", "$routeParams"];
function PostsNewController ($location, $http, $routeParams ) {
  var vm = this;
  vm.create = create;
  vm.post = {}; // form data
  var cityId = $routeParams.cityId;
  function create() {
    console.log('this is the vm.post', vm.post);
    $http
      .post('/api/cities/' + cityId + '/posts', vm.post)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      console.log(response);
      $location.path('/api/cities/' + cityId + '/posts')
    }

    function onCreateError(response){
      console.error("Failed to create post", response);
    }
  };
}
