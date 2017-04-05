configRoutes.$inject = ["$routeProvider", "$locationProvider"];

function configRoutes($routeProvider, $locationProvider) {

$routeProvider
  .when('/', {
    // Should point to index view (public/templates/index.html), not your layout (views/index.html)
  templateUrl: 'templates/index.html'
  })

  .when('/signup', {
    // Your default directory is already set to public, so public/templates... is not necessary
  templateUrl: 'templates/user/signup.html',
  controller: 'SignupController',
  controllerAs: 'sc',
  resolve: {
  skipIfLoggedIn: skipIfLoggedIn
    }
  })
  .when('/login', {
  templateUrl: 'templates/auth/login.html',
  controller: 'LoginController',
  controllerAs: 'lc',
  resolve: {
    skipIfLoggedIn: skipIfLoggedIn
  }
})
.when('/logout', {
  template: null,
  controller: 'LogoutController',
  resolve: {
    loginRequired: loginRequired
  }
})
.when('/profile', {
  templateUrl: 'templates/user/profile.html',
  controller: 'ProfileController',
  controllerAs: 'profileCtrl',
  resolve: {
    loginRequired: loginRequired
  }
})
.when('/cities', {
  templateUrl: 'templates/cities/index.html',
  controller: 'CitiesIndexController',
  controllerAs: 'citiesIndexCtrl'
})
.when('/cities/new', {
  templateUrl: 'templates/cities/new.html',
  controller: 'CitiesNewController',
  controllerAs: 'citiesNewCtrl',
  resolve: {
    loginRequired: loginRequired
  }
})
.when('/cities/:cityId', {
  templateUrl: '/templates/cities/show.html',
  controller: 'CitiesShowController',
  controllerAs: 'citiesShowCtrl'
})
.when('/cities/:cityId/edit', {
  templateUrl: 'templates/cities/edit.html',
  controller: 'CitiesEditController',
  controllerAs: 'citiesEditCtrl',
  resolve: {
    loginRequired: loginRequired
  }
})

.otherwise({redirectTo: '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});


function skipIfLoggedIn($location, $auth) {
  if ($auth.isAuthenticated()) {
    $location.path('/');
  }
}

function loginRequired($location, $auth) {
  if (!$auth.isAuthenticated()) {
    $location.path('/login');
  }
}

}
