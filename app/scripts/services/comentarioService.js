"use strict";

angular.module("comentarios").factory("Comentarios",["$resource",function($resource){
	return $resource("listado/:id",{
		id:"@_id"
	},{
		update:{
			method:"PUT"

		}
	});
}]);