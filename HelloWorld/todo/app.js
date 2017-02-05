var module = angular.module("TodoAppModule", []);
module.controller("TodoCtrl", TodoCtrlFunc);

function TodoCtrlFunc() {

    this.editMode = false;
    this.todoList = ['Spring', 'Java' , 'OSB'];

    this.AddTodo = function() {
        this.todoList.push(this.newTodo);
        this.newTodo = '';
    }

    this.ToggleEdit = function() {
         this.editMode = !this.editMode;        
    }
    this.DeleteTodo = function(index) {
        this.todoList.splice(index, 1);
    }

    this.UpdateTodo = function(index, todo) {        
        this.todoList[index] = todo; 
    }
}