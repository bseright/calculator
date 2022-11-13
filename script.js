let current = 0;
let operand;

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
    operand = 0;
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

        if (this.id === "add" || this.id === "subtract" || this.id === "divide" || this.id === "multiply") {

            operand = 0;

            if (this.id === "add") {
           
                firstExpression.textContent = current + " +";
                alertText.textContent = operand;
            
            } else if (this.id === "subtract") {

                firstExpression.textContent = current + " -";
                alertText.textContent = operand;

            } else if (this.id === "divide") {

                firstExpression.textContent = current + " /";
                alertText.textContent = operand;

            } else if (this.id === "multiply") {

                firstExpression.textContent = current + " *";
                alertText.textContent = operand;

            }

            // replicate for all operators

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
