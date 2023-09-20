const contentCurrentDisplay = document.querySelector("#currentDisplay");
const contentLastDisplay = document.querySelector("#lastDisplay");
const contentHistory = document.querySelector("#history");

let valCurrentDisplay = 0;
let valLastDisplay = 0;
let lastOperator = null;

function appendValue(number) {
  valCurrentDisplay = valCurrentDisplay * 10 + number;
  changeCurrentDisplay();
}

function appendOperator(operator) {
  checkOperator(operator);
  valCurrentDisplay = 0;
  changeCurrentDisplay();
  changeLastDisplay(operator);
}

function clearDisplay() {
  valCurrentDisplay = 0;
  valLastDisplay = 0;
  contentCurrentDisplay.innerHTML = 0;
  contentLastDisplay.innerHTML = 0;
  lastOperator = null;
  contentHistory.innerHTML = "";
}

function changeCurrentDisplay() {
  contentCurrentDisplay.innerHTML = valCurrentDisplay;
}

function changeLastDisplay(operator) {
  contentLastDisplay.innerHTML = valLastDisplay + operator;
}
function calculate() {
  checkOperator();
  valCurrentDisplay = valLastDisplay;
  valLastDisplay = " ";
  changeLastDisplay(" ");
  changeCurrentDisplay();
}

function checkOperator(operator) {
  let calculatedVal = 0;

  switch (lastOperator) {
    case "+":
      calculatedVal = valLastDisplay + valCurrentDisplay;
      break;
    case "-":
      calculatedVal = valLastDisplay - valCurrentDisplay;
      break;
    case "*":
      calculatedVal = valLastDisplay * valCurrentDisplay;
      break;
    case "/":
      calculatedVal = valLastDisplay / valCurrentDisplay;
      break;
    default:
      calculatedVal = valCurrentDisplay;
  }

  if (lastOperator) {
    const listHistoryString =
      valLastDisplay + lastOperator + valCurrentDisplay + "=" + calculatedVal;
    addHistory(listHistoryString);
  }
  valLastDisplay = calculatedVal;
  lastOperator = operator;
}

function addHistory(listHistoryString) {
  contentHistory.innerHTML += "<p>" + listHistoryString + "</p>";
}
