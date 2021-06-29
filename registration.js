const name1 = document.getElementById("name")
const surname = document.getElementById("surname")
const date = document.getElementById("date")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")

form.onsubmit = () => {
  
  return checkEverything()
  
}

function isEmpty(input) {
  if (input === "") {
    alert("You need to fill name, Surname, Date of Birth, E-mail, Password fields!")
    return false
  }
  return true
}

function hasNumber(input) {
  return /\d/.test(input)
}

function hasSpecialChars(input) {
  let special = ">£#$½{[]}\|!'^+%&/()@=?*-_,.;"
  let boo = false

  for (let i=0; i<input.length; i++) {
    if (special.includes(input.charAt(i))) {
      boo = true
      break
    }
  }

  return boo
}

function hasUpperCase(str) {
  return (/[A-Z]/.test(str))
}

function isDateValid(input) {
  const reg = /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](00|20)\d\d/

  if (!input.match(reg) || input.length != 10)
    return false

  let infos = input.split("/")

  if (parseInt(infos[1]) == 2) {
    if (parseInt(infos[2]) % 4 == 0) {
      if (parseInt(infos[0]) > 29) {
        return false
      }
    }
    else {
      if (parseInt(infos[0]) > 28) {
        return false
      }
    }
  }

  let m31 = [1, 3, 5, 7, 8, 10, 12]
  let max = 30

  if (m31.includes(infos[1]))
    max = 31


  if ((infos[1] > 12) || (infos[2] > 2021 || infos[0] > max))
    return false

  
  return true
}

function validateEmail(input) {
    var re = /\S+@\S+\.\S+/
    return re.test(input)
}

function isLengthValid(input) {
  if (input.length >= 6 || input.length <= 15)
    return true
  return false
}


let areEmpty = [name1, surname, date, email, password]
let haveNumber = [name1, surname]


function checkEverything() {
  for (i of areEmpty) {
    if (!isEmpty(i.value))
      return false
  }
  
  for (i of haveNumber) {
    if (hasNumber(i.value)) {
      alert("Name and surname must not contain numbers!")
      return false
    }

    if (hasSpecialChars(i.value)) {
      alert("Name and Surname must not contain special characters!")
      return false
    }
  }
  
  if (!isDateValid(date.value)) {
    alert("Please enter a valid date!")
    return false
  }
  
  if (!validateEmail(email.value)) {
    alert("Please enter a valid e-mail!")
    return false
  }

  if (!isLengthValid(password.value) || !hasNumber(password.value) || !hasUpperCase(password.value) || !hasSpecialChars(password.value)) {
    alert("Please fulfil the password requirements!")
    return false
  }


  return true
}