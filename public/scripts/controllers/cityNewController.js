CitiesNewController.$inject = ["$location", "$http"]; // minification protection
function CitiesNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.city = {}; // form data

  ////

  function create() {
    $http
      .post('/api/cities', vm.city)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      $location.path('/cities/' + response.data._id)
    }

    function onCreateError(response){
      console.error("Failed to create city", response);
    }
  };
}
