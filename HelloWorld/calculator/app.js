var module = angular.module("calculatorAppModule", []);
module.controller("CalCtrl", CalCtrlFunc);

function CalCtrlFunc() {
    this.result = 0;

    this.buttonClicked = function(optionSelected) {
        this.calOperator = optionSelected;
    } 

    this.calculateResult = function() {

        var num1 = parseFloat(this.number1);
        var num2 = parseFloat(this.number2);

        if( this.calOperator === '+' ) {
            this.result = num1 + num2;
        }
        else if( this.calOperator === '-' ) {
            this.result = num1 - num2;
        }
       else if( this.calOperator === '*' ) {
            this.result = num1 * num2;
        }
        else if( this.calOperator === '/' ) {
            this.result = num1 / num2;
        }
    }
}