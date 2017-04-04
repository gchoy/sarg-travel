PostsIndexController.$inject = ["$location", "$http", "$routeParams"];



function PostsIndexController ($http) {
  var vm = this;
  vm.newPost = {};

  vm.newPost = {
    title: "Paris",
    post: "Awesome",
    postBy: "Shaya"
  };

  $http({
    method: 'GET',
    url: '/api/posts/'
  }).then(function successCallback(response){
    console.log(response);
    vm.posts = response.data;
  }, function errorCallback(response){
    console.log("There was an error getting the post", response);
  });






  // query();


  // function query() {
  //   $http
  //     .get('/api/posts')
  //     .then(function onSuccess(response) {
  //       vm.posts = response.data;
  //     });
  // }
}
