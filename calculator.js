

let currentOperation = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || operator) {
        display.innerText = number;
        operator = null;
    } else {
        display.innerText += number;
    }
}

function setOperation(op) {
    if (operator) {
        calculateResult();
    }
    firstOperand = parseFloat(document.getElementById('display').innerText);
    operator = op;
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    currentOperation = '';
    operator = null;
    firstOperand = null;
}

function calculateResult() {
    const display = document.getElementById('display');
    const secondOperand = parseFloat(display.innerText);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    display.innerText = result;
    operator = null;
    firstOperand = null;
}
