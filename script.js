let previousNum = "";
let currentNum = "";
let operator = "";

const currentDisplayNumber = document.getElementById("currentNum");
const previousDisplayNumber = document.getElementById("previousNum");

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
    }
}); 

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    addDecimal();
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", clearCalculator);

const backSpace = document.querySelector(".backspace")
backSpace.addEventListener("click", back);

const plusMinus = document.querySelector(".plusMinus")
plusMinus.addEventListener("click", posNeg); 


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
    currentNum = roundNumber(currentNum);
    currentNum = currentNum.toString();
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000; 
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

function addDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currentDisplayNumber.textContent = currentNum;
    }   
}

function clearCalculator() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = ""; 
}

function back() {
    if (currentNum !== "") {
        currentNum = currentNum.slice(0, -1);
        currentDisplayNumber.textContent = currentNum;
        if (currentNum === "") {
            currentDisplayNumber.textContent = "0";
        }
    }
}
// Does not display current when used 
function posNeg() { 
    if (currentNum > 0) {
        currentNum = currentNum * -1;
        currentDisplayNumber.textContent = currentNum.toString();
    } else {
        if (currentNum < 0) {
            currentNum = currentNum * -1;
            currentDisplayNumber.textContent = currentNum.toString();
        }
    }
}

