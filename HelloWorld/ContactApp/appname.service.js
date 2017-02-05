// IIFE : To prevent global variables to leak into global namespace
(function() {

    var module = angular.module("ContactApp");
    
    module.value("AppDataSvc", {
    "name"   : "Contact Application",
    "author" : "Ruplim Bora"
    });

}) ();
