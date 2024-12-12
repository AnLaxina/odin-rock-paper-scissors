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

// Refactored it so whenever the user clicks a button, a round would have been played

function playRound(event) {

    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    if (humanChoice != null) {
        // Regardless of what the user enters, it will always turn the inputted string into all lowercase
        let humanChoiceLowered = humanChoice.toLowerCase();

        // Select the player choice and compares it with what the randomly generated number made
        switch (humanChoiceLowered) {
            case "rock":
                if (computerChoice === "rock") {
                    console.log("Both played Rock! No change in score.");
                }
                else if (computerChoice === "paper") {
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                }
                else {
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("You win! Scissors beats Paper.");
                    humanScore++;
                }
                else {
                    console.log("Both played Scissors! No change in score.");
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("Both played Paper! No change in score.");
                }
                else {
                    console.log("You lose! Rock beats Paper.");
                    computerScore++;
                }
                break;
            default:
                console.log("Incorrect input! Please select one: rock, paper, scissors");

        }
    }
    else {
        console.log("Please enter something!");
    }
}

// Plays the game based on the number of rounds in the numOfRounds parameter
function playGame(numOfRounds = 1) {
    for (let i = 1; i <= numOfRounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Once done, determine the final score to see who ultimately wins!
    if (humanScore > computerScore) {
        alert(`You win! With ${humanScore} points!`);
    }
    else if (humanScore < computerScore) {
        alert(`You lose! With the computer having ${computerScore} points!`);
    }
    else {
        alert("It's a tie!");
    }

}

let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

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




