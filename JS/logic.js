// Function that returns the "computer's" choice.
// Returns a random string: "rock", "paper", "scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    if (randomNumber === 2) {
        return "scissors";
    }
}

// Function intended for the onclick event for each of the selection buttons
function getHumanChoice(event) {
    let target = event.target;
    let humanChoice = "";
    switch (target.className) {
        case "rock":
            humanChoice = "rock";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        case "paper":
            humanChoice = "paper";
            break;

    }

    return humanChoice;
}

// Refactored it so whenever the user clicks a button, a round would have been played, and the score changes accordingly

function playRound(event) {

    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    // Create an h2 element each time a round is played to show the results
    const h2 = document.createElement("h2");
    h2.textContent = `Round ${currentRound}`;
    results.appendChild(h2);

    const p = document.createElement("p");
    results.appendChild(p);

    instructions.textContent = "";

    if (humanChoice != null) {
        // Regardless of what the user enters, it will always turn the inputted string into all lowercase
        let humanChoiceLowered = humanChoice.toLowerCase();

        // Select the player choice and compares it with what the randomly generated number made
        switch (humanChoiceLowered) {
            case "rock":
                if (computerChoice === "rock") {
                    p.textContent = "Both played Rock! No change in score.";
                }
                else if (computerChoice === "paper") {
                    p.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                }
                else {
                    p.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                }
                currentRound++;
                break;

            case "scissors":
                if (computerChoice === "rock") {
                    p.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    p.textContent = "You win! Scissors beats Paper.";
                    humanScore++;
                }
                else {
                    p.textContent = "Both played Scissors! No change in score.";
                }
                currentRound++;
                break;

            case "paper":
                if (computerChoice === "rock") {
                    p.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                }
                else if (computerChoice === "paper") {
                    p.textContent = "Both played Paper! No change in score.";
                }
                else {
                    p.textContent = "You lose! Rock beats Paper.";
                    computerScore++;
                }
                currentRound++;
                break;
            default:
                console.log("Incorrect input! Please select one: rock, paper, scissors");

        }
    }
    else {
        console.log("Please enter something!");
    }
}

// Once the player or a computer reaches 5 points, the game ends and the results are shown on the screen!
function announceWinner() {
    // Create a node to announce the winner!
    const p = document.createElement("p");
    results.appendChild(p);

    if (humanScore === 5 || computerScore === 5) {
        selections.remove();
        if (humanScore > computerScore) {
            p.textContent = `You win! With your score being: ${humanScore} & the computer's: ${computerScore}`;
        }
        else if (computerScore > humanScore) {
            p.textContent = `The computer wins! With your score being: ${humanScore} & the computer's: ${computerScore}`;
        }
        else {
            p.textContent = "It's.... a tie?? Wow! Both you guys have 5 points!";
        }
    }


}

let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
// Set an indicator for the round for the DOM
let currentRound = 1;

// playGame(3);

// DOM Manipulations for buttons

// Add instructions for the player and indicate how many rounds there are currently
const div = document.querySelector(".instructions");

const instructions = document.createElement("p");
instructions.textContent = `Welcome to Rock Paper Scissors! There will be a total of ${numberOfRounds} rounds. Please click on
a button below to make your choice. You will start the next round automatically once you do click a button and the results will be shown once the game is over!`;

div.appendChild(instructions);

// Handle click methods for each of the buttons
const selections = document.querySelector(".selections");

selections.addEventListener("click", playRound);
selections.addEventListener("click", announceWinner);

const results = document.querySelector(".results");




