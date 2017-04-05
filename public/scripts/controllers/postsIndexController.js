// PostsIndexController.$inject = ["$location", "$http", "$routeParams"];
PostsIndexController.$inject = ["$http"];
console.log("post index html")

function PostsIndexController ($http) {
  console.log('PostIndexController working');
  var vm = this;
  vm.newPost = {};
  vm.posts=[];

  $http({
    method: 'GET',
    url: '/api/posts'
  }).then(function successCallback(response){
    console.log("this is the response in post index controller",response);
    vm.posts = response.data.post;
  }, function errorCallback(response){
    console.log("There was an error getting the post", response);
  });






  // query();
  //
  //
  // function query() {
  //   $http
  //     .get('/api/posts')
  //     .then(function onSuccess(response) {
  //       vm.posts = response.data;
  //     });
  // }
}
