CitiesIndexController.$inject = ["$http"]; // minification protection
function CitiesIndexController ($http) {
  var vm = this;
  vm.cities = [];

  allCities();

  function allCities() {
    $http
      .get('/api/cities')
      .then(function onSuccess(response) {
        vm.cities = response.data;
      });
  }
}
