LogoutController.$inject = ["$location", "UserService"];

function LogoutController ($location, UserService) {
  UserService
    .logout()
    .then(function onSuccess() {
        $location.path('/login');
    });
}
