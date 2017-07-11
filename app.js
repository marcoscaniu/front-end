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
       .when('/agregar-comentario', {
        templateUrl: 'views/comentarios/create-comentarios.html',
        controller: 'ComentarioController',
      })
      .when('/ver-comentario/:id', {
        templateUrl: 'views/comentarios/edit-comentarios.html',
        controller: 'ComentarioController',
      })
      .when('/login', {
        templateUrl: 'views/comentarios/list-comentarios.html',
        controller: 'ComentariosCtrl',
        controllerAs: 'comentarios'
      })
      .when('/comentarios', {
        templateUrl: 'views/comentarios/list-comentarios.html',
        controller: 'ComentarioController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
