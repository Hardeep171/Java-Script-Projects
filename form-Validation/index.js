let fnValid = document.getElementById("fnValid")
let fnInvalid = document.getElementById("fnInvalid")

let lnInvalid = document.getElementById("lnInvalid")
let lnValid = document.getElementById("lnValid")

let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")

let phoneNumberInvalid = document.getElementById("pnInvalid")
let phoneNumberValid = document.getElementById("pnValid")

let zipInvalid = document.getElementById("zipInvalid")
let zipValid = document.getElementById("zipValid")

let tnCInvalid = document.getElementById("tnCInvalid")

let stateValid = document.getElementById("stateValid")
let stateInvalid = document.getElementById("stateInvalid")

let fieldNames = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    zipCode: false,
    email:false,
    state:false,
    tnCCheck:false
}

function validate() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let state = document.getElementById("state").value
    let zipCode = document.getElementById("zipCode").value
    let checkB = document.getElementById("tnCCheck").checked

    if (fieldNames['firstName']) {
        if (firstName === '') {
            fnInvalid.style.display = 'block'
            fnValid.style.display = 'none'
        }
        else {
            fnInvalid.style.display = 'none'
            fnValid.style.display = 'block'
        }
    }
    if (fieldNames['lastName']) {
        if (lastName === '') {
            lnInvalid.style.display = 'block'
            lnValid.style.display = 'none'
        }
        else {
            lnValid.style.display = 'block'
            lnInvalid.style.display = 'none'
        }
    }
    if (fieldNames['email']) {
        if (email == '' || !email.includes('@') || email.startsWith('@') ||
            !email.includes('.') || email.slice(email.lastIndexOf('.')).length
            < 3) {
            emailInvalid.style.display = 'block'
            emailValid.style.display = 'none'
        }
        else {
            emailValid.style.display = 'block'
            emailInvalid.style.display = 'none'
        }
    }
    if (fieldNames['phoneNumber']) {
        if (phoneNumber.length != 10 || phoneNumber.charAt(0) <= 5 || phoneNumber[1] > 9) {
            phoneNumberInvalid.style.display = 'block'
            phoneNumberValid.style.display = 'none'
        } else {
            phoneNumberValid.style.display = 'block'
            phoneNumberInvalid.style.display = 'none'
        }
    }
    if (fieldNames['zipCode']) {
        if (zipCode === '' || zipCode.length != 6) {
            zipInvalid.style.display = 'block'
            zipValid.style.display = 'none'
        }
        else {
            zipValid.style.display = 'block'
            zipInvalid.style.display = 'none'
        }
    }
    if (fieldNames['tnCCheck']) {
        if (fieldNames['tnCCheck']) {
            if (!checkB) {
                tnCInvalid.style.display = 'block'
            }
            else {
                tnCInvalid.style.display = 'none'
            }
        }
    }
    if (fieldNames['state']) {
        if (state === '') {
            stateInvalid.style.display = 'block'
            stateValid.style.display = 'none'
        }
        else {
            stateValid.style.display = 'block'
            stateInvalid.style.display = 'none'
        }
    }
}

function touched(field) {
    fieldNames[field] = true
    console.log(fieldNames)
    validate()
}