app.controller('controlpaso', function($scope){
	$scope.usuario="marcos@kuro.cl";
	$scope.contrasena="1234";

	$scope.verificaUsuario=function(){
		$scope.verdad=angular.equals($scope.usuario,$scope.texto);
		if($scope.verdad==true){
			alert($scope.verdad);
		}else{
			
			alert($scope.error);

		}
	};
});