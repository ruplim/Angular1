var module = angular.module("ContactApp", []);
module.controller("ContactCtrl", ContactCtrlFunc);
module.controller("HeaderCtrl", HeaderCtrlFunc);
module.controller("FooterCtrl", FooterCtrlFunc);


// Value service also takes a function as a parameter
module.value("LoggingSvc", function(){
  console.log("Hello!!!")
});

// Value service needs to have inline definition
module.value("AppDataSvc", {
   "name" : "Contact Application",
   "author" : "Ruplim Bora"
});

/* Example of Constant Service  
module.constant("AppDataSvc", {
   "name" : "Contact Application",
   "author" : "Ruplim Bora"
});
*/

function prepareAppConfig(AppDataSvc) {

  var value = {};
  value.name   = AppDataSvc.name;
  value.author = AppDataSvc.author;
  value.buildDate = new Date().toDateString();

  return value;
}

//Constructor function
function ConstructorAppConfig(AppDataSvc) {
  
  //var this = {};  Added by Javascript
  this.name   = AppDataSvc.name;
  this.author = AppDataSvc.author;
  this.buildDate = new Date().toDateString();

  //return this;  Added by Javascript
}


//Example of Factory Service
module.factory("AppDataFactorySvc", prepareAppConfig);  // prepareAppConfig() .. function executed

//Define a Service. Call Constructor function
module.service("AppDataServiceSvc", ConstructorAppConfig); //  new ConstructorAppConfig() .. function executed in constructor mode

// Try to use Angular Service as it would give flexibility of created/assigning new classes also in future.. also from Angular 2 persceptive

function ContactCtrlFunc() {

   this.contacts = [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "aleksi",
        "last": "moilanen"
    },
    "location": {
        "street": "5973 suvantokatu",
        "city": "joutsa",
        "state": "päijät-häme",
        "postcode": 83925
    },
    "email": "aleksi.moilanen@example.com",
    "login": {
        "username": "ticklishdog499",
        "password": "natural",
        "salt": "77uvnKzY",
        "md5": "872ac8237a6211ec309908b1b3db0565",
        "sha1": "322c56fbf92c08dc53c42d9e11d036c53d692965",
        "sha256": "37fc1374eaf3d5a01d967495b6c38460d941d4380749d21115c90b942ff4b709"
    },
    "dob": "1995-05-16 22:24:19",
      "registered": "2002-11-26 18:04:12",
      "phone": "05-867-941",
      "cell": "046-878-29-09",
      "id": {
        "name": "HETU",
        "value": "695-905J"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
      },
      "nat": "FI"
    },
    {
          "gender": "female",
          "name": {
            "title": "ms",
            "first": "charisa",
            "last": "den blanken"
          },
          "location": {
            "street": "6640 groeneweg",
            "city": "leusden",
            "state": "friesland",
            "postcode": 47560
          },
          "email": "charisa.denblanken@example.com",
          "login": {
            "username": "greentiger299",
            "password": "antonio",
            "salt": "ds7pCM8B",
            "md5": "0e7ccadb60d1cd49e21c3f7c1cab972b",
            "sha1": "4a78869dcb808ff685f1ae373365516a2483bfd8",
            "sha256": "922b482cfb2b792d127281f981ea2b64983a22e3372b3d49a60767ba67b121ae"
          },
          "dob": "1954-08-26 00:32:19",
          "registered": "2010-03-25 17:57:39",
          "phone": "(072)-316-7374",
          "cell": "(873)-978-2242",
          "id": {
            "name": "BSN",
            "value": "91475535"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
          },
          "nat": "NL"
       }

    ];
    this.selectedContact = this.contacts[1];

    this.selectContact = function(index) {
        this.selectedContact = this.contacts[index];
    }   
   
}


function HeaderCtrlFunc(AppDataFactorySvc) {
     this.appTitle = AppDataFactorySvc.name;
     this.buildDate = AppDataFactorySvc.buildDate;
     
}

/*
function HeaderCtrlFunc(AppDataServiceSvc) {
     this.appTitle = AppDataServiceSvc.name;
     this.buildDate = AppDataServiceSvc.buildDate;
     
}*/


//Example of value service injection 
function FooterCtrlFunc(AppDataSvc, LoggingSvc) {
   this.appTitle = AppDataSvc.author;
   LoggingSvc();
}