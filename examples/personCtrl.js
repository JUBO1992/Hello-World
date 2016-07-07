 var app = angular.module('def', []);
 app.controller('personCtrl', function($scope) {
     $scope.firstN = "Bo";
     $scope.lastN = "Ju";
     $scope.person = {
         firstName: "Bo",
         lastName: "Ju",
     };
     $scope.fullName = function() {
         var x = $scope.person;
         return x.firstName + " " + x.lastName;
     }
 });