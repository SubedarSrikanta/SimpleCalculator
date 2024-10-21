let currentInput = '';
let operator = '';
let firstValue = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstValue = null;
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (firstValue === null) {
        firstValue = parseFloat(currentInput);
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    let secondValue = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            if (secondValue === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = firstValue / secondValue;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    currentInput = result;
    firstValue = null;
}

function sqrt() {
    let value = parseFloat(currentInput);
    document.getElementById('display').value = Math.sqrt(value);
    currentInput = Math.sqrt(value);
}

function power() {
    let value = parseFloat(currentInput);
    document.getElementById('display').value = Math.pow(value, 2);
    currentInput = Math.pow(value, 2);
}
