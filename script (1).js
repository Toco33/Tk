let display = document.getElementById('display');
let currentInput = '';
let calculation = [];

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    calculation = [];
    display.textContent = '0';
}

function calculate() {
    if (currentInput === '') return;

    calculation.push(currentInput);
    let result = eval(calculation.join(''));
    display.textContent = result;
    currentInput = '';
    calculation = [];
}
