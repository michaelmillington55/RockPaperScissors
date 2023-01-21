function computerChoice() {
    return Math.floor(Math.random()*3);
}
computerSelection=computerChoice();
let playerSelection=prompt("Rock paper scissors?");
let computerScore=0
let playerScore=0
function lowerCase(){
    if (playerSelection.toLowerCase()=="rock"){
    playerSelection=0;}
    else if (playerSelection.toLowerCase()=="paper"){
        playerSelection=1;}
    else if (playerSelection.toLowerCase()=="scissors"){
        playerSelection=2;}
    }
lowerCase();
function round(playerSelection,computerSelection){
    if (computerSelection==0 && playerSelection==0 || computerSelection==1 && playerSelection==1 || computerSelection==2 && playerSelection==2){
        console.log("Tie! Try again");
    } 
    else if (computerSelection==0 && playerSelection==1 || computerSelection==1 && playerSelection==2 || computerSelection==2 && playerSelection==0){
        console.log("You won that round");
        playerScore+=1;
        return playerScore;
    }
    else if (computerSelection==1 && playerSelection==0 || computerSelection==2 && playerSelection==1 || computerSelection==0 && playerSelection==2){
        console.log("You lost that round, try again");
        computerScore+=1;
        return computerScore;
        
}
}
while (computerScore<5 && playerScore<5){
    round(playerSelection,computerSelection);
    alert("Your score is "+playerScore+" The computers score is "+computerScore);
    playerSelection=prompt("Rock paper scissors?");
    computerSelection=computerChoice();
    lowerCase();
}

