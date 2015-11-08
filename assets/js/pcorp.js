var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
  
  $routeProvider.when('/inicio', {
    templateUrl: "templates/inicio.html",
    controller: "inicioController"
  });
  
  $routeProvider.when('/servicios', {
    templateUrl: "templates/servicios.html",
    controller: "serviciosController"
  });
  
  $routeProvider.when('/proyectos', {
    templateUrl: "templates/proyectos.html",
    controller: "proyectosController"
  });  

   $routeProvider.when('/contacto', {
    templateUrl: "templates/contacto.html",
    controller: "contactoController"
  });  
  
  $routeProvider.otherwise({
        redirectTo: '/inicio'
  });


}]);

app.controller("inicioController",["$scope",function($scope){
}]);
app.controller("serviciosController",["$scope",function($scope){
}]);
app.controller("proyectosController",["$scope",function($scope){
}]);
app.controller("contactoController",["$scope",function($scope){
}]);



