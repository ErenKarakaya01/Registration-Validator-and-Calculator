let prev = document.getElementById("up")
let cur = document.getElementById("down")

let ce = document.getElementById("CE")
let seven = document.getElementById("7")
let four = document.getElementById("4")
let one = document.getElementById("1")
let zero = document.getElementById("0")
let divide = document.getElementById("1/x")
let eight = document.getElementById("8")
let five = document.getElementById("5")
let two = document.getElementById("2")
let dot = document.getElementById(".")
let nine = document.getElementById("9")
let six = document.getElementById("6")
let three = document.getElementById("3")
let equals = document.getElementById("=")
let division = document.getElementById("/")
let multiply = document.getElementById("x")
let minus = document.getElementById("-")
let plus = document.getElementById("+")


let curOperator = ""

function setPrev(variable) {
  prev.innerText = variable
}

function setCur(variable) {
  cur.innerText = variable
}

function calculate(number1, number2) {
  if (curOperator == "+")
    return (parseInt(number1*100000) + parseInt(number2*100000)) / 100000
  else if (curOperator == "-")
    return (parseInt(number1*100000) - parseInt(number2*100000)) / 100000
  else if (curOperator == "x")
    return ((number1*10) * (number2*10)) / 100
  else if (curOperator == "/")
    return ((number1*10) / (number2*10))
  return number2
}

let wasJustChanged = true

let numbers = [one, two, three, four, five, six, seven, eight, nine, zero]
for (let i of numbers) {
  i.addEventListener("click", () => {
    if (!wasJustChanged) {
      cur.innerText = cur.innerText + i.innerHTML
    }
    else {
      cur.innerText = i.innerHTML
      wasJustChanged = false
    }

    if (prev.innerText === "")
      result = parseFloat(i.innerText)
  })
}

let result = 0
let isLastOperator = false

function equalsFunc() {
  result = calculate(result, parseFloat(cur.innerText))
  setPrev(result)
  setCur(result)
  wasJustChanged = true
  curOperator = ""
  isLastOperator = false
}

equals.addEventListener("click", equalsFunc)

let operators = [plus, minus, multiply, division]
for (let i of operators) {
  i.addEventListener("click", () => {
    if (!isLastOperator)
      equalsFunc()
    wasJustChanged = true
    curOperator = i.innerText
    setPrev(result + " " + i.innerText)
    isLastOperator = true
  })
}

ce.addEventListener("click", () => {
  setPrev("")
  setCur("0")
  curOperator = ""
  result = 0
  isLastOperator = false
  wasJustChanged = true
})

divide.addEventListener("click", () => {
  setPrev("")
  result = 1/result
  setCur(result)
})

dot.addEventListener("click", () => {
  let transient = cur.innerText
  if (!cur.innerText.includes(".")) {
    transient = cur.innerText + "."
    wasJustChanged = false
  }

  setCur(transient)
})