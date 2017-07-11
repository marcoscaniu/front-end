app.controller('ComentarioController', ["$scope", "$routeParams", "$location", "$resource", "ComentarioService", function ($scope, $routeParams, $location, $resource, ComentarioService, $modal) {
	$scope.find = function () {
		ComentarioService.query().then((resp, err) => {
			$scope.comentarios = resp.data;
		});
		$scope.eliminar = (id, index) => {
			ComentarioService.remove({ _id: id }).then((resp) => {
				$scope.comentarios.splice(index, 1);
			}).catch((err) => {
				console.log(err);
			});
		}
		
	}
	$scope.findOne = function () {

		ComentarioService.getById({ _id: $routeParams.id }).then((resp) => {
			$scope.comentarios = resp.data;

			console.log(resp.data);
		}).catch((err) => {
			console.log(err);
		});
		//return $scope.comentarios;
	};
	$scope.create = function () {
		ComentarioService.save(this.comentario).then((resp) => {
			$location.path('/comentarios');
		}).catch((err) => {
			console.log(err);
		});
	};

	$scope.update = function () {
		ComentarioService.update(this.comentarios).then((resp) => {
			this.location.path('/comentarios');
		})
			.catch((err) => {
				console.log(err);
			});

	};

}
]);
// -----------------------------------------------------

// app.factory(‘authService’, function ($http, $q) {
//  return {
//   login: function(user){
//    var deferred = $q.defer();
//    var promise = deferred.promise;

//    $http.jsonp('http://misitio.com/api.php')
//    .success(function(data) {
//     deferred.resolve(data);
//    })
//    .error(function(err) {
//     deferred.reject(err)
//    });
//    return promise;
//   }
//  }
// });

// app.controller(‘LoginCtrl’, function ($scope, authService) {
//   $scope.login = function(user) {
//    var promise = authService.login(user);
//    promise.then(function(res) {
//     $scope.datos = res;
//    });
//   }
// });


// app.controller('ComentarioController', function($scope,ComentarioService){
// 	// Comentario.getAll(function(data){
// 	// 	$scope.comentarios=data.comentarios;
// 	// });
// 	$scope.find=function(){
// 		$scope.comentarios=ComentarioService.getAll();
// 	};
// }]);

/*export default class ComentarioController{
	constructor($scope,
				$routeParams,
				method,
				comentarioService,
				$location
				){
		this.scope    = $scope;
		this.location = $location;
		switch (method) {
			case 'list':
				this.list(comentarioService);
			break;
			case 'new':
				this.create(comentarioService);
			break;
			case 'view':
				this.view($routeParams,
						comentarioService);
			break;
		}
	}

	list(comentarioService){
		comentarioService.getAll().then((resp, err) => {
			this.scope.comentario = resp.data.message;
		});

		this.scope.eliminar = (id, index) => {
			comentarioService.delete({_id: id}).then((resp) => {
				this.scope.comentario.splice(index, 1);
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}

	create(comentarioService){

		this.scope.guardar = () => {
			comentarioService.save(this.scope.comentario).then((resp) => {
				this.location.path('/comentario');
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}

	view($routeParams,
		 comentarioService){

		this.scope.aux = {};
		comentarioService.getById({_id: $routeParams.id}).then((resp) => {
			this.scope.comentario = resp.data.message;
		}).catch((er) => {
			console.log(er);
		});

		this.scope.guardar = () => {
			comentarioService.update(this.scope.comentario).then((resp) => {
				this.location.path('/comentario');
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}
}
*/