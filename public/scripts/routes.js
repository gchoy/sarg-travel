configRoutes.$inject = ["$routeProvider", "$locationProvider"];

function configRoutes($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

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
.when('/posts', {
  templateUrl: 'templates/posts/index.html',
  controller: 'PostsIndexController',
  controllerAs: 'postsIndexCtrl'
})
.otherwise({redirectTo: '/'});

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
