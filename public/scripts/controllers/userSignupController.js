console.log('signup controller is connected');
SignupController.$inject = ["$location", "UserService"];

function SignupController ($location, UserService) {
  var vm = this;
  vm.new_user = {};
  console.log(vm);

  vm.signup = function() {
    UserService
      .signup(vm.new_user)
      .then(
        function onSuccess(response) {
          vm.new_user = {};

          $location.path('/profile');
        }
      );
  };
}
