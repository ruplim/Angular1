(function() {

    var module = angular.module("ContactApp");
    module.controller("ContactCtrl", ContactCtrlFunc);

    function ContactCtrlFunc(ContactDataSvc) {

        var self = this;
        self.editMode = false;
        self.addMode = false;

        ContactDataSvc.getContacts()
            .then(function(data) {
                self.contacts = data;
            });

        this.selectContact = function(index) {
            this.selectedContact = this.contacts[index];
            this.successMessage = undefined;
            this.errorMessage = undefined;
        }

        this.toggleEditMode = function() {
            this.editMode = !this.editMode;
        }

        this.saveUser = function() {
            this.toggleEditMode();

            if (this.addMode) {
                ContactDataSvc.addUser(this.selectedContact)
                    .then(function() {
                        self.successMessage = "Data added successfully..";
                    }, function() {
                        self.errorMessage = "Data addition failed. Please again later..ok?";
                    });

                    this.addMode =  false;
            } else {
                ContactDataSvc.saveUser(this.selectedContact)
                    .then(function() {
                        self.successMessage = "Data updated successfully..";
                    }, function() {
                        self.errorMessage = "Data update failed. Please again later..ok?";
                    });
            }


        }

        this.addUser = function() {
            this.toggleEditMode();
            this.addMode = true;
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
        }
    }
})();