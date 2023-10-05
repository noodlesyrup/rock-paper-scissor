

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let randomChoices = Math.floor(Math.random()* choices.length);

    return choices[randomChoices];
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return "It's a tie";
    }
    else if( 
        playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper"
        ){
        return "You Win!";
    }
    else{
        return "You Lose";
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter a rock, paper, scissor").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Round" + i + 1);
        console.log("Player Choose: "+ playerSelection);
        console.log("Computer Choose: "+ computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}


