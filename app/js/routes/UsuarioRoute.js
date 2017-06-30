angular
  .module('login', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create-account', {
        templateUrl: 'views/usuarios/login-usuarios.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: 'views/comentarios/list-comentarios.html',
        controller: 'ComentariosCtrl',
        controllerAs: 'comentarios'
      });
  });