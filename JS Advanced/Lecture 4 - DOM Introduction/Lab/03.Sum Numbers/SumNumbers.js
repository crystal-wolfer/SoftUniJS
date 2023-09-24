function calc() {
    // TODO: sum = num1 + num2
    const num1 = document.querySelector('#num1').value; // gets the value from the #num1 input field
    const num2 = document.querySelector('#num2').value; // gets the value from the #num2 input field
    const sum = Number(num1) + Number(num2);

    document.querySelector('#sum').value = sum;

}
