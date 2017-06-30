app.controller('ComentarioController', [ function($scope){
	$scope.create=function(){
		var comentario=new Comentario({
			descripcion:this.titulo
		});
		comentario.$save(function(response){
			$location.path("comentarios/"+response._id);

		},function(errorResponse){
			$scope.error=errorResponse.data.message;
		});
	},

	$scope.find=function(){
		$scope.comentarios=Comentarios.query();
	};		
}
]);

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class ComentarioService {
//   constructor(private http: Http) { }

//   get comentarios() {
//     return http.get(`comentarios/listado`)
//       .map(response => response.json());
//   }

// }
// app.factory("productService", productService);
// productService.$inject = ['$http', '$location', 'productCategoryService' ];
// function productService($http, $location, productCategoryService) {
    
//     return {
      
//         getAllProducts : function(){
            
//             return $http.get('/api/getAllProducts');
//         },
        
//         getAllProductCategories : function () {
        
//             return productCategoryService.getAllProductCategories();
        
//         },
        
       
//         getIdFromEndPoint : function () {
            
//             var absoluteUrl = $location.absUrl();
//             var segments = absoluteUrl.split("/");
//             var productCategoryId = segments[segments.length - 1];
//             return productCategoryId
        
       
//         }
//     }

// }
