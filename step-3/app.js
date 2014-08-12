var myApp = angular.module('myApp', []);

/** use for prefined directive demo which is mention in angular-predefined-directive-test.html **/

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    
   $scope.userList=["rituraj","ravindra","manoj","malay"];

}]);

/**	using in our second demo for custom directive demo which is mention in custom-directive-in-angularjs.html **/
myApp.directive('helloTest', function() {
return {
restrict: 'AE',
replace: 'true',
template: '<h3>Hello World!!</h3>',// good for tiny piece html 
link: function (scope, element, attrs) {
// DOM manipulation and events handle here!
     element.bind('click', function() {
        alert("directive click action");
     });
    // you can also bind mouse over mouseout and many more
}
}
});