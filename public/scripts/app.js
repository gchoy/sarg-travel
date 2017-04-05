console.log('things are happnening');
angular
  .module('sarg-travel', [
    'ngRoute',
    'satellizer'
  ])
  .controller('MainController', MainController)
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsNewController', PostsNewController)
  .controller('PostsShowController', PostsShowController)
  .controller('PostsEditController', PostsEditController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)
  ;
