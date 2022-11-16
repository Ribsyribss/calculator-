let previousNum = "";
let currentNum = "";
let operator = "";

const currentDisplayNumber = document.getElementById("currentNum");
const previousDisplayNumber = document.getElementById("previousNum");

const equal = document.getElementById("=");
equal.addEventListener('click', calculate); 

const decimal = document.getElementById(".");
const clear = document.getElementById("clear")
const numberButtons = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if(currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    } 
}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
}); 

function handleOperator(op) {
    operator = op; 
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = ""; 
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum = previousNum + currentNum;
    } else if (operator === "-") {
        previousNum = previousNum - currentNum;
    } else if (operator === "x") {
        previousNum = previousNum * currentNum;
    } else if (operator === "/") {
        if(currentNum <= 0) {
            previousNum = "Error"
            displayResults();
            return;
        }
        previousNum = previousNum / currentNum;
    }
    previousNum = previousNum.toString();
    displayResults;
}

function displayResults() { 
    previousDisplayNumber.textContent = "";
    operator = "";
    if(previousNum.length <= 11){
        currentDisplayNumber.textContent = previousNum;
    } else {
        currentDisplayNumber.textContent = previousNum.slice(0, 11) + "...";
    }
}