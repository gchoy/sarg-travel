CitiesEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function CitiesEditController($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.city = {}; // form data

//this is pretty consistent
  var id = $routeParams.cityId;
  //a little dangerous, maybe also rename to "getCity()"
  //consider factory controllors or merging similar controllers
  //for fewer files etc
  get(); // fetch one city (show)

  function update() {
    $http
      .put('/api/cities/' + id, vm.city)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response) {
      $location.path("/cities/" + id);
    }

    function onUpdateError(response) {
      console.error("Failed to update city", response);
    }
  }

  function destroy() {
    $http
      .delete('/api/cities/' + id)
      .then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response) {
      $location.path("/");
    }

    function onDeleteError(response) {
      console.error("Failed to delete city", response);
    }
  }

  function get() {
    $http
      .get('/api/cities/' + id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response) {
      vm.city = response.data;
    }

    function onGetError(response) {
      console.error("Failed to get city", response);
      $location.path("/");
    }
  };
}
