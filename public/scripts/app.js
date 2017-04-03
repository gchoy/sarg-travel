angular
  .module('sarg-travel', ['appRoutes', 'userControllers'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider

    .when('/' , {
      templateUrl: 'views/index.html'
    })
    .when('/register', {
      templateUrl: 'views/users/register.html'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
