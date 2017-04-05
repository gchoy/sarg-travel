 PostsIndexController.$inject = ["$http"];

function PostsIndexController ($http) {
  var vm = this;
  vm.posts=[];


  query();


  function query() {
    $http
      .get('/api/posts')
      .then(function onSuccess(response) {

        vm.posts = response.data;
      });
  }
}
