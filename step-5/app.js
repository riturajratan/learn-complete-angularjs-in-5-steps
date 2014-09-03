//create a module
var myApp = angular.module('myApp', []);
//url routing
myApp.config(function ($routeProvider, $locationProvider) {
    console.log("route");
    $routeProvider
    .when('/home',
    {
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
    })
    .when('/about',{
        controller: 'AboutCtrl',
        templateUrl: 'views/aboutus.html'
    }).
      otherwise({
        redirectTo: '/home'
      });


});

myApp.controller('RoutCtrl',function($scope, $location){
  $scope.goto=function(view){
      $location.path(view);
  };

});