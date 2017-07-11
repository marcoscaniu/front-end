app.service('ComentarioService', function ($http, $resource) {
	var routes = {
		"all": '/comentarios/listado',
		"id": '/comentarios/listado/:id',
		"new": '/comentarios/agregar',
		'delete': '/comentarios/eliminar/:id'
	};
	this.save = function (data) {
		return $http.post(routes.new, data);
	}
	this.remove = function (objId) {
		let idRoute = routes.delete.replace(':id', objId._id);
		return $http.delete(idRoute);
	}
	this.query = function (data) {
		return $http.get(routes.all);
	}
	this.update = function (data) {
		return $http.put(routes.new, data);
	}
	this.getById = function (objId) {
		let idRoute = routes.id.replace(':id', objId._id);
		return $http.get(idRoute);
	}
})
// export default class comentarioService{
// 	constructor($http, baseUrl){
// 		this.http = $http;
// 		this.baseUrl = baseUrl;
// 		this.routes = {
// 			"all": '/comentario/listado',
// 			"id": '/comentario//:id',
// 			"new": '/comentario/agregar',
// 			'delete': '/comentario/:id'
// 		};
// 	}

// 	getAll(filters){
// 		let url = this.baseUrl + this.routes.all;
// 		let config = {
// 			params : filters
// 		};
// 		return this.http.get(url);
// 	}

// 	getById(objId){
// 		let idRoute = this.routes.id.replace(':id', objId._id);
// 		let url = this.baseUrl + idRoute;
// 		return this.http.get(url);
// 	}

// 	save(data){
// 		let url = this.baseUrl + this.routes.new;
// 		return this.http.post(url, data);
// 	}

// 	update(data){
// 		let url = this.baseUrl + this.routes.new;
// 		return this.http.put(url, data);
// 	}

// 	delete(objId){
// 		let idRoute = this.routes.delete.replace(':id', objId._id);
// 		let url = this.baseUrl + idRoute;
// 		return this.http.delete(url);
// 	}
// }