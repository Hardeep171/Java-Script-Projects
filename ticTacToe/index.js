let playersDiv = document.getElementById('players')
let gameDiv = document.getElementById('gameDiv')
function start(){
    playersDiv.style.display = 'none'
    gameDiv.style.display = 'block'
}

let columns = document.getElementsByClassName('col')
let turnn = document.getElementById('h2')
let turn = 1

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
// column index start from zero
const ticTacToe = (colIndex) => {

    if(!columns[colIndex].innerText){
        columns[colIndex].innerText = turn === 1 ? 'X' : 'O'
        let x = checkWinningStatus()
        if(x != 'noWinner'){
            x === 'X' ? turnn.innerText = `Player ${x} won!` : turnn.innerText = `Player ${x} won!`
           // turnn.innerText = `Player ${x} won!`
            turnn.style.backgroundColor = 'rgba(33, 150, 240, 1)'
            return
        }
        turn = turn === 1 ? 2 : 1
        turnn.innerText = `Player ${turn}'s turn`  
    }
}

const checkWinningStatus = () => {

    for (let i = 0; i < winCondition.length; i++) {
        let condition = winCondition[i]
        let value = columns[condition[0]].innerText
        if(condition.every( idx => columns[idx].innerText && columns[idx].innerText === value)){
            addColor(condition)
            return value === 'X' ? 1 : 2
        }
    }
    return 'noWinner'
}

function addColor(indexArr){
    indexArr.forEach(element => {
        columns[element].style.backgroundColor = 'rgba(33, 150, 240, 1)'
    });
}

function reStart(){
    location.reload()
}
 // if (x === 'X') {
        //     turnn.innerText = 'player 1 won'
        //     return
        // }else if( x === 'O'){
        //     turnn.innerText = 'player 2 won'
        //     return
        // }
        
//         let p1 = document.getElementById('player1')
// let p2 = document.getElementById('player2')
// let player1 = ''
// let player2 = ''
//         player1 = p1.value
//     player2 = p2.value