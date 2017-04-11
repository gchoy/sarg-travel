PostsIndexController.$inject = ["$http", "$routeParams"];

function PostsIndexController ($http, $routeParams) {
  var vm = this;
  vm.posts=[];
//strange namings....queryPosts()
  query();

  function query() {
    $http
      .get('/api/users/' + $routeParams.Id + '/posts')
      .then(function onSuccess(response) {
        console.log('vm post value: ', vm.posts);
        vm.posts = response.data;
      });
  }
}
