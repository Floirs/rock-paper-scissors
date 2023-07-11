let winningMoves = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper",
}

let playerScore = 0;
let enemyScore = 0;

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // console.log("Player played:", playerSelection);
    // console.log("Computer played:", computerSelection)
    if (playerSelection in winningMoves === false) {throw new Error("Not a valid hand")};
    if (winningMoves[playerSelection] == computerSelection) {
        // console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        // return `You win! ${playerSelection} beats ${computerSelection}`;
        return `You Win!`;
    } else if (playerSelection == computerSelection) {
        console.log("Draw")
        return "It's a Draw";
    }
    // console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    enemyScore++;
    // return `You lose! ${computerSelection} beats ${playerSelection}`;
    return `You Lose!`;

}

function game() {
    const btns = document.querySelectorAll("button");
    const result = document.querySelector(".result");
    const plrScore = document.querySelector(".score-player");
    const enmScore = document.querySelector(".score-enemy")

    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // console.log(e.target.className)
            if (e.target.className == "reset") {
                playerScore = 0;
                enemyScore = 0;
                plrScore.innerText = `Player Score: ${playerScore}`;
                enmScore.innerText = `Enemy Score: ${enemyScore}`;
                result.innerText = "Press the buttons above to play";
                return;
            }
            const roundResult = playRound(e.target.className, getComputerChoice())
            result.innerText = roundResult
            plrScore.innerText = `Player Score: ${playerScore}`;
            enmScore.innerText = `Enemy Score: ${enemyScore}`;
        })
    })
}


game();