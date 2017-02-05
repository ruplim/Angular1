// IIFE : To prevent global variables to leak into global namespace
(function() {
    var module = angular.module("ContactApp");

    /*
    //Constructor function
    function prepareAppConfig(AppDataSvc) {
        //var this = {};  Added by Javascript
        this.name   = AppDataSvc.name;
        this.author = AppDataSvc.author;
        this.buildDate = new Date().toDateString();
        //return this;  Added by Javascript
    }
    //Define a Service. Call Constructor function
    module.service("AppDataServiceSvc", prepareAppConfig); //  new ConstructorAppConfig() .. function executed in constructor mode
    */

    module.service("AppDataServiceSvc", function (AppDataSvc) {
        this.name   = AppDataSvc.name;
        this.author = AppDataSvc.author;
        this.buildDate = new Date().toDateString();
    }); 

}) ();