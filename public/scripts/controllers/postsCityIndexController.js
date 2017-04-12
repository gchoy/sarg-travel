PostsCityIndexController.$inject = ["$http", "$routeParams"];

function PostsCityIndexController ($http, $routeParams) {
  var vm = this;

  vm.posts=[];
  $http
    .get('/api/cities/' + $routeParams.cityId + '/posts')
    .then(function onSuccess(response) {
      // TODO: if there are no posts, then lets get an array object back from server with an 'empty' json key with the value set to _city id
      console.log('this is resposnse.data: ', response.data);
      vm.posts = response.data;
    });

  //query(); //call the function



  // function query() {
  //
  //
  // }
}
