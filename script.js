let current;
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(this.id)
    })
});
