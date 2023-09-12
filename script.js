const contentCurrentDisplay = document.querySelector("#currentDisplay");
const contentLastDisplay = document.querySelector("#lastDisplay");
const contentHistory = document.querySelector("#history");

let valCurrentDisplay = 0;
let valLastDisplay = 0;
let valHistory = 0;

function appendValue(number) {
  valCurrentDisplay = valCurrentDisplay * 10 + number;
  changeCurrentDisplay();
}

function appendAddition(operator) {
  checkOperator(operator);
  operator = "+";
  valCurrentDisplay = 0;
  changeCurrentDisplay();
  changeLastDisplay(operator);
}
function appendSubtraction(operator) {
  checkOperator();
  valCurrentDisplay = 0;
  operator = "-";
  changeCurrentDisplay();
  changeLastDisplay(operator);
}
function appendMultiplication(operator) {}
function appendDivision(operator) {}
function calculate() {}

function clearDisplay() {
  valCurrentDisplay = 0;
  valLastDisplay = 0;
  contentCurrentDisplay.innerHTML = 0;
  contentLastDisplay.innerHTML = 0;
}

function changeCurrentDisplay() {
  contentCurrentDisplay.innerHTML = valCurrentDisplay;
}

function changeLastDisplay(operator) {
  contentLastDisplay.innerHTML = valLastDisplay + operator;
}

function checkOperator(operator) {
  let interVal = 0;
  if (operator === "+") {
    interVal = valLastDisplay + valCurrentDisplay;
  }
  if (operator === "-") {
    interVal = valLastDisplay - valCurrentDisplay;
  }
  if (operator === "*") {
    interVal = valLastDisplay * valCurrentDisplay;
  }
  if (operator === "/") {
    interVal = valLastDisplay / valCurrentDisplay;
  }
  valLastDisplay = interVal;
}
// function calculate() {
//   const test1 = contentCurrentDisplay.innerHTML;
//   const result = eval(contentCurrentDisplay.innerHTML);
//   contentCurrentDisplay.innerHTML = result;

//   const test2 = result;

//   contentMemory.innerHTML += "<p>" + test1 + "</p>";
// }
