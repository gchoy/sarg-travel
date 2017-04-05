CitiesShowController.$inject = ["$location", "$http", "$routeParams"];

function CitiesShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.city = {};

  var id = $routeParams.cityId;
  get(); // fetch one city (show)

  function get() {
    $http
      .get('/api/cities/' + id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.city = response.data;
      console.log(response);
      console.log(response.data);
    }

    function onGetError(response){
      console.error("Failed to get city", response);
      $location.path("/");
    }
  };
}
