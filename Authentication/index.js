function isChar(str){
  let  lettersOrDigits = /[a-zA-Z0-9]+$/
  let str2 = str
   return str2.match(lettersOrDigits)?true:false;
}
function isDigit(str){
    let lettersOrDigits = /[0-9]+$/
   let  str2 = str;
        return str2.match(lettersOrDigits)?true:false;
}
const lookup = {
    'a': 'n','b': 'o','c': 'p','d': 'q',
    'e': 'r','f': 's','g': 't','h': 'u',
    'i': 'v','j': 'w','k': 'x','l': 'y',
    'm': 'z','n': 'a','o': 'b','p': 'c',
    'q': 'd','r': 'e','s': 'f','t': 'g',
    'u': 'h','v': 'i','w': 'j','x': 'k',
    'y': 'l','z': 'm',
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M','@':'#','#':'@','0':'5',
    '1':'6','2':'7','3':'8','4':'9','5':'0','6':'1','7':'2','8':'3','9':4
  };
let pass = ""
let encodedStr = ""

function savePass() {
     pass = document.getElementById("pass").value;
    // console.log(isChar(pass) + " " + isDigit(pass))
    if (pass.length < 20 &&pass.length >5  && (pass.includes("@") || pass.includes("#")) && isChar(pass) && isDigit(pass)){
        encodedStr = encode(pass)
       // console.log("pass = "+pass+"encodedPass = "+encodedStr)
    
        document.getElementById("rightPass").style.display = 'block';
         document.getElementById("wrongPass").style.display = 'none';
         document.getElementById("notSaved").style.display = 'none';
        document.getElementById("saved").style.display = 'block';
    }
    else{
        document.getElementById("wrongPass").style.display = 'block';
        document.getElementById("rightPass").style.display = 'none';
        document.getElementById("notSaved").style.display = 'block';
        document.getElementById("saved").style.display = 'none';
    }  
   
}
let encode = (str) => {
    console.log("str = "+ str)
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = str.split("")

    let encodedArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index];
    })
    return encodedArr.join("")
}
const decode = (encoded) =>{
    console.log("decode")
    const arr = encoded.split("")
    const decodeArr = arr.map(element => {
        return lookup[element]
    })
    return decodeArr.join("")
}
function submitPass(){
     let password = document.getElementById("password").value
     //console.log("pass= "+password)
     if(password !=''){
       let  password2 = decode(encodedStr)
       console.log("decoded str = "+decode(encodedStr))
       password===password2?console.log("match"):console.log("not match")
       if(password===password2){
       document.getElementById("match").style.display = 'block';
       document.getElementById("notMatch").style.display = 'none';
       }
       else{
        document.getElementById("match").style.display = 'none';
        document.getElementById("notMatch").style.display = 'block';
       }
     }else{
       console.log("Enter a password ")
     }
}