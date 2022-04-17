var displayArea = document.getElementById("display")

function isOperator(btnText) {
    if (btnText == '+' || btnText == '-' || btnText == '/' || btnText == '*' || btnText == '%')
        return true
    else
        return false
}



function buttonClicked(btnText) {
    if(displayArea.innerText.length >=24){
        displayArea.innerText = "0"
    }

    if (btnText === 'clear') {
        displayArea.innerText = '0'
        return
    }
    if (btnText === 'del') {
        if (displayArea.innerText.length == '1') {
            displayArea.innerText = '0'
        }
        else if (displayArea.innerText.length > '0'){
            displayArea.innerText = displayArea.innerText.slice(0, -1)
        }
        return    
    }
     if(btnText === '='){
        try{
           displayArea.innerText = eval(displayArea.innerText)
        }
        catch(error){
           displayArea.innerText = '0'
        }
        return
    }


    if (btnText != 'clear' && btnText != 'del' && btnText != '=') {
        if (displayArea.innerText === '0') {
            // dont do any thing if btn Text is 0 and 00
            if (btnText !== '00' && btnText !== '0') {
                if (btnText == '.' || isOperator(btnText)) {
                    displayArea.innerText = displayArea.innerText + btnText
                }
                else {
                    displayArea.innerText = btnText
                }
            }
        }
        else {
            if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(btnText)) {
                displayArea.innerText = displayArea.innerText.slice(0, -1) + btnText
            }
            else {
                displayArea.innerText = displayArea.innerText + btnText
            }
        }
    }
}


// function buttonClicked(btnText) {
//     if(displayArea.innerText.length >=24){
//         return
//     }
//     if (btnText != 'clear' && btnText != 'del' && btnText != '=') {
//         if (displayArea.innerText === '0') {
//             // dont do any thing if btn Text is 0 and 00
//             if (btnText !== '00' && btnText !== '0') {
//                 if (btnText == '.' || isOperator(btnText)) {
//                     displayArea.innerText = displayArea.innerText + btnText
//                 }
//                 else {
//                     displayArea.innerText = btnText
//                 }
//             }
//         }
//         else {
//             if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(btnText)) {
//                 displayArea.innerText = displayArea.innerText.slice(0, -1) + btnText
//             }
//             else {
//                 displayArea.innerText = displayArea.innerText + btnText
//             }
//         }
//     }
//     else {
//         if (btnText === 'clear') {
//             displayArea.innerText = '0'
//         }
//         else if (btnText === 'del') {
//             if (displayArea.innerText.length == '1') {
//                 displayArea.innerText = '0'
//             }
//             else if (displayArea.innerText.length > '0')
//                 displayArea.innerText = displayArea.innerText.slice(0, -1)
//         }
//         else if(btnText === '='){
//             try{
//                displayArea.innerText = eval(displayArea.innerText)
//             }
//             catch(error){
//                displayArea.innerText = '0'
//             }
//         }
//     }
// }