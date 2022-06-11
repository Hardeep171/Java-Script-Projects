
function isChar(str) {
    let lettersOrDigits = /[a-zA-Z0-9]+$/
    let str2 = str
    return str2.match(lettersOrDigits) ? true : false;
}
function isDigit(str) {
    let lettersOrDigits = /[0-9]+$/
    let str2 = str;
    return str2.match(lettersOrDigits) ? true : false;
}
const lookup = {
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M', '@': '#', '#': '@', '0': '5',
    '1': '6', '2': '7', '3': '8', '4': '9', '5': '0', '6': '1', '7': '2', '8': '3', '9': '4', '0': '5'
};

let password = document.getElementById("password")
let strength = document.getElementById("strength")

let Name = document.getElementById('nameValue')
let email = document.getElementById("email")
let pass = ""
let encodedStr = ""
let Name2 = ""
let email2 = ""

let home = document.getElementById('home-nav-link').classList
let signup = document.getElementById('signup-nav-link').classList
let login = document.getElementById('login-nav-link').classList

function inst() {
    document.getElementById('instructions').style.display = 'block'
    document.getElementById('log').style.display = 'none'
    document.getElementById('sign').style.display = 'none'
}
function sub() {
    document.getElementById('sign').style.display = 'block'
    document.getElementById('instructions').style.display = 'none'
    document.getElementById('log').style.display = 'none'
}
function inpt(){
    document.getElementById("access").style.display = 'none';
}
function inptPassword() {
    document.getElementById("passwordSaved").style.display = 'none';
    document.getElementById("access").style.display = 'none';
    let prog = ""
    var password_strength = document.getElementById("progressBar");
    strength.style.display = 'block'
    if (password.value.length == '0') {
        prog = ""
        strength.innerText = ''
    }
    else if (password.value.length <= 5) {
        strength.innerText = 'Easy'
        strength.style.color = 'red'

        prog = "<div class='progress-bar bg-danger' style='width: 25%'>easy</div>"
    }
    else if (password.value.length >= 6 && password.value.length < 12) {
        strength.innerText = 'Moderate'
        strength.style.color = 'orange'

        prog = "<div class='progress-bar bg-warning' style='width: 50%'>Moderate</div>"
    }
    else {
        strength.innerText = 'Strong'
        strength.style.color = 'green'

        prog = "<div class='progress-bar bg-success' style='width: 100%'>Strong</div>"
    }
    password_strength.innerHTML = prog
}



function signUp() {
    strength.style.display = 'none'
    Name2 = Name.value
    email2 = email.value
    pass = password.value
    if (Name2 != '') {
        document.getElementById('valid-name').style.display = 'block'
        document.getElementById('inValid-name').style.display = 'none'
        //console.log("email=" + email2)
        if (email2 != '') {
            document.getElementById('valid-feedback').style.display = 'block'
            document.getElementById('inValid-feedback').style.display = 'none'
            if (pass.length < 20 && pass.length > 4 && (pass.includes("@") || pass.includes("#")) && isChar(pass) && isDigit(pass)) {
                encodedStr = encode(pass)
                document.getElementById('access').style.display = 'block'
               // console.log("pass = " + pass + "encodedPass = " + encodedStr + 'email=' + email2 + 'name=' + Name2)

                document.getElementById("passwordNotSaved").style.display = 'none'
                document.getElementById("passwordSaved").style.display = 'block';
            }
            else {
                document.getElementById("passwordSaved").style.display = 'none';
                document.getElementById("passwordNotSaved").style.display = 'block';
            }
        }
        else {
            document.getElementById('valid-feedback').style.display = 'none'
            document.getElementById('inValid-feedback').style.display = 'block'
            document.getElementById("passwordNotSaved").style.display = 'block'
            document.getElementById("passwordSaved").style.display = 'none';
        }
    }
    else {
        document.getElementById('valid-feedback').style.display = 'none'
            document.getElementById('inValid-feedback').style.display = 'block'
        document.getElementById('valid-name').style.display = 'none'
        document.getElementById('inValid-name').style.display = 'block'
        document.getElementById("passwordNotSaved").style.display = 'block'
        document.getElementById("passwordSaved").style.display = 'none';
    }

}


function logg() {
    document.getElementById('log').style.display = 'block'
    document.getElementById('access').style.display = 'none'
    document.getElementById('sign').style.display = 'none'
    signup.remove('activee')
    login.add('activee')
    home.remove('activee')
}
function sign() {
    document.getElementById('sign').style.display = 'block'
    document.getElementById('log').style.display = 'none'
    signup.add('activee')
    login.remove('activee')
    home.remove('activee')
}
function log() {
    document.getElementById('sign').style.display = 'none'
    document.getElementById('log').style.display = 'block'
}
let encode = (str) => {
   // console.log("str = " + str)
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = str.split("")

    let encodedArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index];
    })
    return encodedArr.join("")
}

const decode = (encoded) => {
   // console.log("decode")
    const arr = encoded.split("")
    const decodeArr = arr.map(element => {
        return lookup[element]
    })
    return decodeArr.join("")
}

function rem() {
    document.getElementById('enter').style.display = 'none'
}

function logIn() {
    let passwordd = document.getElementById("passwordd").value
    let email3 = document.getElementById("email3").value
    if (passwordd != '' && email3 != '') {
        let password2 = decode(encodedStr)
        //   console.log("pass = "+passwordd+"encodedPass = "+encodedStr)
        //   console.log("decoded str = "+decode(encodedStr))
        //   passwordd===password2?console.log("granted"):console.log("denied")
        if (passwordd === password2 && email3 === email2) {
            document.getElementById("granted").style.display = 'block';
            document.getElementById("denied").style.display = 'none';
        }
        else {

            document.getElementById("granted").style.display = 'none';
            document.getElementById("denied").style.display = 'block';
        }
    }
    else {
        //   console.log("Enter a password ")
        document.getElementById('enter').style.display = 'block'
    }
}

function changeActiveNavlink(Active) {
    if (Active === 'SIGN_UP') {
        signup.add('activee')
        document.getElementById('sign').style.display = 'block'
        document.getElementById('log').style.display = 'none'
        document.getElementById('instructions').style.display = 'none'
        login.remove('activee')
        home.remove('activee')
    }
    else if (Active === 'LOGIN') {
        login.add('activee')
        document.getElementById('log').style.display = 'block'
        document.getElementById('sign').style.display = 'none'
        document.getElementById('instructions').style.display = 'none'
        home.remove('activee')
        signup.remove('activee')
    }
}