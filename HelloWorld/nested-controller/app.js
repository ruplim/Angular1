var module = angular.module("nestedCtrlModule", []);
module.controller("Ctrl1", Ctrl1Func);
module.controller("Ctrl2", Ctrl2Func);

/*
*** Below used with ng-controller
function Ctrl1Func($scope) {
   $scope.propValue = "Ctrl1";
}

function Ctrl2Func($scope) {
   $scope.propValue = "Ctrl2";
}
***
*/

// $scope is not required when used ControllerAs syntax
function Ctrl1Func() {
   this.propValue = "Ctrl1";
}

function Ctrl2Func() {
   this.propValue = "Ctrl2";
}