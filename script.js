let current = 0;
let expression;
let operator;

let buttons = document.querySelectorAll("button");
let alertText = document.querySelector("#alertText p");
let firstExpression = document.querySelector("#firstExpression");

// theme elements
let slider = document.querySelector(".slider");
let numberButtons = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let resetButton = document.querySelector("#reset");
let delButton = document.querySelector("#delete");
let calcBody = document.querySelector(".calcBody");
let calcHeader = document.querySelector(".calcHeader");
let footer = document.querySelector("footer");

alertText.textContent = current;

function del() {
    current = current.toString().slice(0, -1);
    alertText.textContent = current;

    if (current === "" || current === "-") {
        current = 0;
        alertText.textContent = current;
    }
}

function reset() {
    current = 0;
    expression = 0;
    alertText.textContent = current;
    firstExpression.textContent = "";
}

function decimal() {
    if (current.toString().includes(".")) {

    } else {
        current = current + ".";
        alertText.textContent = current;
    }
}

function add() {
    firstExpression.textContent = "";

    current = expression + current;
    alertText.textContent = current;

    expression = 0;
}

function subtract() {
    firstExpression.textContent = "";

    current = expression - current;
    alertText.textContent = current;

    expression = 0;
}

function divide() {
    firstExpression.textContent = "";

    current = expression / current;
    alertText.textContent = current;

    expression = 0;
}

function multiply() {
    firstExpression.textContent = "";

    current = expression * current;
    alertText.textContent = current;

    expression = 0;
}

function diffOperator() {
    if (operator === "+") {
        expression = expression + current;
    } else if (operator === "-") {
        expression = expression - current;
    } else if (operator === "/") {
        expression = expression / current;
    } else if (operator === "*") {
        expression = expression * current;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {

        // check if operator has been selected 
        // assign value to operand
        // if operand is undefined continue editing current

    if (this.id === "equal") {

        expression = Number(expression);
        current = Number(current);

        if (operator === "+") {
            
            add();
        
        } else if (operator === "-") {

            subtract();

        } else if (operator === "/") {

            divide();

        } else if (operator === "*") {

            multiply();

        }
        
    } else if (this.id === "+" && expression > 0 || this.id === "+" && expression < 0 || this.id === "-" && expression > 0 || this.id === "-" && expression < 0 || this.id === "/" && expression > 0 || this.id === "/" && expression < 0 || this.id === "*" && expression > 0 || this.id === "*" && expression < 0) {
        
        expression = Number(expression);
        current = Number(current);

        if (this.id === "+") {

            if (operator !== this.id) {

                diffOperator();
                
            } else {

                expression = expression + current;
                
            }
        
            firstExpression.textContent = expression + " +";
            operator = "+";

            current = 0;
            alertText.textContent = current;
        
        } else if (this.id === "-") {

            if (operator !== this.id) {

                diffOperator();

            } else {

                expression = expression - current;

            }
        
            firstExpression.textContent = expression + " -";
            operator = "-";

            current = 0;
            alertText.textContent = current;

        } else if (this.id === "/") {

            if (operator !== this.id) {

                diffOperator();

            } else {

                expression = expression / current;

            }
        
            firstExpression.textContent = expression + " /";
            operator = "/";

            current = 0;
            alertText.textContent = current;

        } else if (this.id === "*") {

            if (operator !== this.id) {

                diffOperator();

            } else {

                expression = expression * current;

            }
        
            firstExpression.textContent = expression + " *";
            operator = "*";

            current = 0;
            alertText.textContent = current;

        }
        
    } else if (this.id === "+" || this.id === "-" || this.id === "/" || this.id === "*") {

        expression = current;
        current = 0;

        if (this.id === "+") {
        
            firstExpression.textContent = expression + " +";
            alertText.textContent = current;
            operator = "+";
        
        } else if (this.id === "-") {

            firstExpression.textContent = expression + " -";
            alertText.textContent = current;
            operator = "-";

        } else if (this.id === "/") {

            firstExpression.textContent = expression + " /";
            alertText.textContent = current;
            operator = "/";

        } else if (this.id === "*") {

            firstExpression.textContent = expression + " *";
            alertText.textContent = current;
            operator = "*";

        }

    } else {

        if (this.id === "delete") {
            
            del();

        } else if (this.id === "reset") {

            reset();

        } else if (this.id === "decimal") {
            
            decimal();

        } else if (current === 0 && this.id == 0) {
        
        } else if (current === 0) {

            current = this.id;
            alertText.textContent = current;

        } else {

            current = current.toString() + this.id.toString();
            alertText.textContent = current;

        }
    }})
});


slider.addEventListener('click', function() {

    numberButtons.forEach(button => {
        button.classList.toggle("lightButtons");
    })

    operators.forEach(button => {
        button.classList.toggle("lightOperators");
    })
    
    resetButton.classList.toggle("lightReset");
    delButton.classList.toggle("lightDelete");
    alertText.classList.toggle("lightAlert");
    calcBody.classList.toggle("lightCalcBody");
    calcHeader.classList.toggle("lightHeader");
    footer.classList.toggle("lightFooter");

});