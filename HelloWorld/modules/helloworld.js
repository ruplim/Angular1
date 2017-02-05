var module = angular.module("HelloModule", []);
module.controller("MessageCtrl", MessageCtrlFunc);

function MessageCtrlFunc() {
    this.message = "Hello Angular..!! How are you today?";
}
