PostsNewController.$inject = ["$location", "$http"];
function PostsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.post = {}; // form data

  ////

  function create() {
    $http
      .post('/api/posts', vm.post)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      console.log(response);
      $location.path('/posts/' + response.data.postId)
    }

    function onCreateError(response){
      console.error("Failed to create post", response);
    }
  };
}
