let images = document.querySelectorAll(".img");
let yourScore = document.querySelector('.your-score');
let computerScore = document.querySelector(".computer-score");

let yScore = 0;
let cScore = 0;


// play
function play(e){
    let playerChoose = e.target.id;
    console.log(playerChoose)
    let computerChoose = getComputerChoice();
    console.log(computerChoose)
    let winner = getWinner(playerChoose, computerChoose);
    console.log(winner)
    let score = getScore(winner);
    console.log(score)
    document.querySelector(".your-score").textContent = yScore;
    document.querySelector(".computer-score").textContent = cScore;
}

// player choice
images.forEach(img => {
    img.addEventListener("click", play)
})
// computer choice
function getComputerChoice(){
    let nameArr = ['rock', 'papper', 'scissor'];
    let random = Math.floor(Math.random() * nameArr.length);
    let compChoose = nameArr[random];
    return compChoose;
}
// who win
 function getWinner(p, c){
     if (p === c){
         return "draw";
     }else if(p === "rock"){
         if(c === 'papper'){
            return "Computer Win";
         }else{
            return "Player win";
         }
     }else if(p === 'papper'){
         if(c === 'scissor'){
            return "Computer Win";
         }else{
             return "Player Win";
         }
     }else if(p === 'scissor'){
         if(c === 'rock'){
             return "Computer Win"
         }else{
             return "Player Win";
         }
     }
 }

//  mesaure score
function getScore(winner){

   if(winner === "Player Win"){
       return yScore++;
   }else if(winner === "Computer Win"){
       return cScore++
   }


}

(function(){
    let namePos = ['rock', 'papper', 'scissor'];
    let random = Math.floor(Math.random() * namePos.length);
    let computerChoice = namePos[random];
    console.log(computerChoice)
    let value = prompt("Do you choice rock, papper or scissor");
    let yourChoice = value;
    if(!(yourChoice === "rock" || yourChoice === "papper" || yourChoice === "scissor")){
        console.log("Nu")
    }
    if(yourChoice === computerChoice){
        console.log("tie");
    }else if(yourChoice === "rock"){
        if(computerChoice === "papper"){
            console.log("Computer");
        }else if(computerChoice === "scissor"){
            console.log("You");
        }
    else if(yourChoice === "papper"){
        if(computerChoice === "rock"){
            console.log("you");
        }else if(computerChoice === "scissor"){
            console.log("computer");
        }
    }else if(yourChoice === "scissor"){
        if(computerChoice === "rock"){
            console.log("computer");
        }else if(computerChoice === "papper"){
            console.log("you");
        }
    }
    }
})();