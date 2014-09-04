//create a module
var myApp = angular.module('myApp', []);

myApp.factory("XYZ",function(){// we are registering a service as XYZ 
var test=0;
return {
    /** by this get test varible value**/
    "get":function(){

        return test;
    },

   /** to set new  value of test variable **/
    "set":function(passtest){
        test=5;

    }
};

});
// create a  Controller with custom service
myApp.controller('basicCtrl', function($scope,XYZ) {
    
    $scope.val_test = XYZ.get();

    $scope.changeval=function(changeval){
    
    XYZ.set(changeval);
    $scope.val_test = XYZ.get();    
    }  
});