let current = 0;
let expression;
let operator;

let buttons = document.querySelectorAll("button");
let alertText = document.querySelector("#alertText p");
let firstExpression = document.querySelector("#firstExpression");

alertText.textContent = current;

function del() {
    current = current.toString().slice(0, -1);
    alertText.textContent = current;

    if (current === "") {
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

buttons.forEach(button => {
    button.addEventListener('click', function() {

        // check if operator has been selected 
        // assign value to operand
        // if operand is undefined continue editing current

    if (this.id === "equal") {

        expression = Number(expression);
        current = Number(current);

        if (operator === "add") {
            
            firstExpression.textContent = "";

            current = expression + current;
            alertText.textContent = current;

            expression = 0;
        
        } else if (operator === "subtract") {

            firstExpression.textContent = "";

            current = expression - current;
            alertText.textContent = current;

            expression = 0;

        } else if (operator === "divide") {

            firstExpression.textContent = "";

            current = expression / current;
            alertText.textContent = current;

            expression = 0;

        } else if (operator === "multiply") {

            firstExpression.textContent = "";

            current = expression * current;
            alertText.textContent = current;

            expression = 0;

        }
        
    } else if (this.id === "add" || this.id === "subtract" || this.id === "divide" || this.id === "multiply") {

        expression = current;
        current = 0;

        if (this.id === "add") {
        
            firstExpression.textContent = expression + " +";
            alertText.textContent = current;
            operator = "add";
        
        } else if (this.id === "subtract") {

            firstExpression.textContent = expression + " -";
            alertText.textContent = current;
            operator = "subtract";

        } else if (this.id === "divide") {

            firstExpression.textContent = expression + " /";
            alertText.textContent = current;
            operator = "divide";

        } else if (this.id === "multiply") {

            firstExpression.textContent = expression + " *";
            alertText.textContent = current;
            operator = "subtract";

        }

    } else {

        // replicate below for operand IF operand is not undefined

        if (this.id === "delete") { // place into own function to work with backspace press
            
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
