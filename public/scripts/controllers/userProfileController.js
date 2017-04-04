ProfileController.$inject = ["$location", "UserService"];

function ProfileController ($location, UserService) {
  var vm = this;
  vm.new_profile = {};

  vm.updateProfile = function() {
    UserService
      .updateProfile(vm.new_profile)
      .then(function onSuccess() {
        vm.showEditForm = false;
      });
  };

  vm.userInfo = function(user){
    $http({
      method : 'GET',
      url : '/api/userInfo/' + $routeParams.id
    }).then(foundUser, errorFoundUser);
    function foundUser(user){
    console.log(user);
    }
    function errorFoundUser(err){
      console.log('potato error', err);
    }
  }
}
