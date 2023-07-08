let winningMoves = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper",
}

function getComputerChoice() {
    let computerOptions = ["rock", "paper", "scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // console.log("Player played:", playerSelection);
    // console.log("Computer played:", computerSelection)
    if (playerSelection in winningMoves === false) {throw new Error("Not a valid hand")};
    if (winningMoves[playerSelection] == computerSelection) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    } else if (playerSelection == computerSelection) {
        console.log("Draw")
        return "draw";
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return false;

}

function game() {
    let playerScore = 0;
    let drawCount = 0;
    for (let i = 0; i < 5; i++) {
        playerHand = prompt("Choose your hand:").toLowerCase();
        roundResult = playRound(playerHand, getComputerChoice());
        if (roundResult == "win") {
            ++playerScore;
        } else if (roundResult == "draw") {
            ++drawCount;
        }
        console.log("End of round", i + 1);
    }
    console.log(`Player final score: ${playerScore}\nComputer final score: ${5 - playerScore - drawCount}`);
}

game();