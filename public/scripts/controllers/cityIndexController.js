CitiesIndexController.$inject = ["$http"]; // minification protection
function CitiesIndexController ($http) {
  var vm = this;
  vm.cities = [];

  query(); // fetch all the cities (index)

  ////

  function query() {
    $http
      .get('/api/cities')
      .then(function onSuccess(response) {
        vm.cities = response.data;
      });
  }
}
