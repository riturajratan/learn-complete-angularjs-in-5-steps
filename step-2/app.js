//create a module
var myApp = angular.module('myApp', []);
 
//create a Controller 
myApp.controller('BasicCtrl', ['$scope', function ($scope) {
 
//create a scope
 $scope.testText = 'Hello, Scope view Controller test.';
 
}]);

// create a parent Controller
myApp.controller('ParentCtrl', function($scope) {
  $scope.user = {name: "rituraj"};
});

// create a child Controller
myApp.controller('ChildCtrl', function($scope) {
  $scope.changeName = function() {
    $scope.user.name = "ravindra";
  }
});