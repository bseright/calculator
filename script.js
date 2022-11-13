let current = 0;

let buttons = document.querySelectorAll("button");
let alertText = document.querySelector("p");

alertText.textContent = current;

buttons.forEach(button => {
    button.addEventListener('click', function() {

        if (this.id === "reset") {

            current = 0;
            alertText.textContent = current;

        } else if (current === 0 && this.id == 0) {
        
        } else if (current === 0) {

            current = this.id;
            alertText.textContent = current;

        } else {

            current = current.toString() + this.id.toString();
            alertText.textContent = current;

        }
    })
});
