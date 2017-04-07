PostsCityIndexController.$inject = ["$http", "$routeParams"];

function PostsCityIndexController ($http, $routeParams) {
  var vm = this;
  vm.posts=[];
  query(); //call the function
  function query() {
    $http
      .get('/api/cities/' + $routeParams.cityId + '/posts')
      .then(function onSuccess(response) {
        vm.posts = response.data;
      });
  }
}
