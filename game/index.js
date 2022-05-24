let input = document.getElementById('inputTxt')
let smaller = document.getElementById('smaller')
let greater = document.getElementById('greater')
let write = document.getElementById('write')
let wrong = document.getElementById('wrong')
let button = document.getElementById('bttn')
let val = document.getElementById('val')
let guessRemaining = document.getElementById('txt')
let arr = document.getElementById('arr')
let reload = document.getElementById('reload')
let guess = 9
let array = []
const randomNum = Math.floor((Math.random() * 100) + 1)
let check = () => {
    // console.log(randomNum)
    let number = Number(input.value)
    // console.log("inpt val= " + number)
    // console.log(array)
    if (number == '') {
       val.style.display = 'block'
       return
    }
    array.push(number)
    let str = ''
    str = array.join()
    arr.innerHTML = '[' + str + ']'
    if ( guess > 0 && number > randomNum) {
        // console.log('number is greater')
        smaller.style.display = 'none'
        greater.style.display = 'block'
        write.style.display = 'none'
        wrong.style.display = 'none'
        val.style.display = 'none'
    } else if ( guess > 0 && number < randomNum ) {
        // console.log('number is smaller')
        smaller.style.display = 'block'
        greater.style.display = 'none'
        write.style.display = 'none'
        wrong.style.display = 'none'
        val.style.display = 'none'
    } else {
        if (guess == 0) {
            val.style.display = 'none'
            smaller.style.display = 'none'
            greater.style.display = 'none'
            write.style.display = 'none'
            wrong.style.display = 'block'
            button.disabled = true
            reload.style.display = 'block'
        }
        else {
            // console.log('you won')
            wrong.style.display = 'none'
            write.style.display = 'block'
            smaller.style.display = 'none'
            greater.style.display = 'none'
            val.style.display = 'none'
            button.disabled = true
            reload.style.display = 'block'
        }
    }
    guessRemaining.innerText = 'Guess Remaining : ' + guess
    guess--
}

function valDisplay(){
    val.style.display = 'none'
}