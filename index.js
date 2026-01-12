let numberOnScreen = 18
let numberSecScreen = 10
let numVal = document.getElementById("number1")
 let numberVal = document.getElementById("number")
let reset = 0
function plusOnePoint(){
    numberOnScreen++
    numberVal.textContent = numberOnScreen
   
}
function plusTwoPoint(){
    numberOnScreen += 2
    numberVal.textContent = numberOnScreen
   
}
function plusThreePoint(){
    numberOnScreen += 3
    numberVal.textContent = numberOnScreen
   
}

function plusPoint(){
    numberSecScreen++
    numVal.textContent = numberSecScreen
   
}
function plus2Point(){
    numberSecScreen += 2
    numVal.textContent = numberSecScreen
   
}
function plus3Point(){
    numberSecScreen += 3
    numVal.textContent = numberSecScreen
   
}

let newGameButton = document.getElementById("new-btn")

function newGame(){
    numVal.textContent = reset
    numberVal.textContent = reset
    numberOnScreen = 0
    numberSecScreen = 0
}

let winnerPlayer = documnet.getElementById("win")
if(numberVal == 60 || numberOnScreen == 60){
    winnerPlayer.innerHtml = "Player One Wins"
} else if(numVal == 60){
     winnerPlayer.innerHtml = "Player Two Wins"
}



