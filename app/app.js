'use strict';

/**
 * @ngdoc overview
 * @name sApp
 * @description
 * # sApp
 *
 * Main module of the application.
 */
var app=angular
  .module('sApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/usuarios/login-usuarios.html',
        controller: 'controlpaso',

      })
      .when('/comentarios/listado', {
        templateUrl: 'views/comentarios/list-comentarios.html',
        controller: 'ComentarioController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
