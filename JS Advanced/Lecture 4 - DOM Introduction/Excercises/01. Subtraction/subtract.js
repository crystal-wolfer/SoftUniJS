function subtract() {
    let n1 = document.getElementById('firstNumber');
    let n2 = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    result.textContent = Number(n1.value) - Number(n2.value);
}