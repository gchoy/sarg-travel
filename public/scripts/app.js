angular
  .module('Sarg-travel', ['ngRoute'])
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
