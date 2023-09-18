const contentCurrentDisplay = document.querySelector("#currentDisplay");
const contentLastDisplay = document.querySelector("#lastDisplay");
const contentHistory = document.querySelector("#history");

let valCurrentDisplay = 0;
let valLastDisplay = 0;
let valHistory = 0;
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
}

function changeCurrentDisplay() {
  contentCurrentDisplay.innerHTML = valCurrentDisplay;
}

function changeLastDisplay(operator) {
  contentLastDisplay.innerHTML = valLastDisplay + operator;
}
function calculate() {
  checkOperator(lastOperator);
  valCurrentDisplay = valLastDisplay;
  valLastDisplay = " ";
  changeLastDisplay(" ");

  changeCurrentDisplay();
}

function checkOperator(operator) {
  let interVal = 0;
  if (lastOperator === null) {
    interVal = valCurrentDisplay;
  }
  if (lastOperator === "+") {
    interVal = valLastDisplay + valCurrentDisplay;
  }
  if (lastOperator === "-") {
    interVal = valLastDisplay - valCurrentDisplay;
  }
  if (lastOperator === "*") {
    interVal = valLastDisplay * valCurrentDisplay;
  }
  if (lastOperator === "/") {
    interVal = valLastDisplay / valCurrentDisplay;
  }
  valLastDisplay = interVal;
  lastOperator = operator;
}
// function calculate() {
//   const test1 = contentCurrentDisplay.innerHTML;
//   const result = eval(contentCurrentDisplay.innerHTML);
//   contentCurrentDisplay.innerHTML = result;

//   const test2 = result;

//   contentMemory.innerHTML += "<p>" + test1 + "</p>";
// }

/**
 * 1.   Eingabe Zahl (1)
 * 2.   addition
 * 3.   Eingabe nächste Zahl (5)
 * 4.   substraction
 * 5.   1+5 wird gerechnet und als result angezeigt (6)
 * 6.   Eingabe nächste Zahl (3)
 * 7.   multiplication
 * 8.   6-3 wird gerechnet und als result angezeigt (3)
 * 9.   Eingabe nächste Zahl (3)
 * 10.  xxxx
 * 11.  3*3 wird gerechnet und als result angezeigt (9)
 */

/**
 * Wenn lastDisplay === 0 dann keine operation ausführen
 */
