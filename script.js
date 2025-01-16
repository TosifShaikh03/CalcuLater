const result = document.getElementById("result")
const AC = document.getElementById("AC")
const percent = document.getElementById("percent")
const DE = document.getElementById("DE")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const substract = document.getElementById("substract")
const addition = document.getElementById("addition")
const equalto = document.getElementById("equal-to")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const doublezero = document.getElementById("double-zero")
const decimal = document.getElementById("decimal")

one.addEventListener("click", ONE)
two.addEventListener("click", TWO)
three.addEventListener("click", THREE)
four.addEventListener("click", FOUR)
five.addEventListener("click", FIVE)
six.addEventListener("click", SIX)
seven.addEventListener("click", SEVEN)
eight.addEventListener("click", EIGHT)
nine.addEventListener("click", NINE)
zero.addEventListener("click", ZERO)
doublezero.addEventListener("click", DOUBLEZERO)
multiply.addEventListener("click", MULTIPLY)
divide.addEventListener("click", DIVIDE)
substract.addEventListener("click", SUBSTRACT)
addition.addEventListener("click", ADDITION)
decimal.addEventListener("click", DECIMAL)
equalto.addEventListener("click", EQUALTO)
AC.addEventListener("click", CANCLE)
DE.addEventListener("click", DELETE)
// percent.addEventListener("click",PERCENT)


function ONE() {
    result.value += "1"
}
function TWO() {
    result.value += "2"
}
function THREE() {
    result.value += "3"
}
function FOUR() {
    result.value += "4"
}
function FIVE() {
    result.value += "5"
}
function SIX() {
    result.value += "6"
}
function SEVEN() {
    result.value += "7"
}
function EIGHT() {
    result.value += "8"
}
function NINE() {
    result.value += "9"
}
function ZERO() {
    result.value += "0"
}
function DOUBLEZERO() {
    result.value += "00"
}
function MULTIPLY() {
    result.value += "*"
}
function DIVIDE() {
    result.value += "/"
}
function SUBSTRACT() {
    result.value += "-"
}
function ADDITION() {
    result.value += "+"
}
function DECIMAL() {
    result.value += "."
}
function CANCLE() {
    result.value = " "
}
function DELETE() {
    result.value = result.value.toString().slice(0, -1)
}
function EQUALTO() {
    result.value = eval(result.value);
}