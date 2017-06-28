'use strict';

/**
 * @ngdoc function
 * @name sApp.controller:ComentariosCtrl
 * @description
 * # ComentariosCtrl
 * Controller of the sApp
 */
angular.module("comentarios").controller('ComentarioController', ['$scope',"$routeParams","$location","Comentarios" function($scope,$routeParams,$location,$Comentarios){
	$scope.create=function(){
		var comentario=new Comentario({
			descripcion:this.titulo
		});
		comentario.$save(function(response){
			$location.path("comentarios/"+response._id);

		},function(errorResponse){
			$scope.error=errorResponse.data.message;
		});
	};

	$scope.find=function(){
		$scope.comentarios=Comentarios.query();
	};		
}
]);