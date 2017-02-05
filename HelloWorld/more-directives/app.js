var module = angular.module("mdirModule", []);
module.controller("mdirCtrl", mdirCtrlFunc);

function mdirCtrlFunc() {
    this.myList = [
        { "name": "Sachin", "age":39 },
        { "name": "Ganguly", "age":40 },
        { "name": "Laxman", "age":41 },
        { "name": "Rahul", "age":38 }
    ];
}
