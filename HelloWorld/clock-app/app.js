var clockAppModule = angular.module("clockAppModule", []);
clockAppModule.controller("ClockAppCtrl", ClockAppFunc);

function ClockAppFunc($scope) {
    $scope.currentTime = getCurrentTime();

    $scope.updateTime = function() {
        $scope.currentTime = getCurrentTime();
    }
}

function getCurrentTime() {
    return new Date().toTimeString();
}
