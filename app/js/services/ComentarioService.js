app.factory('Comentarios', ['$resource', function($resource){
	return $resource("comentarios/listado/:id",{
		id:"@_id"
	},{
		update:{
			method:"PUT"
		}
	});
}])