'use strict';

/**
 * @ngdoc overview
 * @name sApp
 * @description
 * # sApp
 *
 * Main module of the application.
 */
angular
  .module('sApp', [
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
      .when('/', {
        templateUrl: 'views/usuarios/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/usuarios/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/comentarios/listado', {
        templateUrl: 'views/comentarios/comentarios.html',
        controller: 'ComentariosCtrl',
        controllerAs: 'comentarios'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
