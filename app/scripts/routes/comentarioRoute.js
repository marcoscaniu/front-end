"use strict";

angular.module().config(["$routeProvider",
	function($routeProvider){
		$routeProvider.
		when("/comentarios",{
			templateUrl:"views/comentarios/comentarios.html"
		}).
		when("/comentarios/create",{
			templateUrl:"views/comentarios/comentarios-create.html"
		}).
		when("/comentarios/:id",{
			templateUrl:"views/comentarios/comentarios.html"
		}).
		when("/comentarios/:id/edit",{
			templateUrl:"views/comentarios/comentarios-edit.html"
		});
	}
]);