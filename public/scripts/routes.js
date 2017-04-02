configRoutes.$inject = ["$routeProvider", "$locationProvider"];

function configRoutes($routeProvider, $locationProvider) {

$routeProvider
  .when('/', {
  templateUrl: 'views/index.html'
  })
  .when('/register', {
  templateUrl: 'public/templates/user/register.html',
  controller: 'SignupController',
  controllerAs: 'sc',
  resolve: {
  skipIfLoggedIn: skipIfLoggedIn
  });
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
.when('/posts', {
  templateUrl: 'templates/posts/index.html',
  controller: 'PostsIndexController',
  controllerAs: 'postsIndexCtrl'
})
.otherwise({redirectTo: '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
})

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
