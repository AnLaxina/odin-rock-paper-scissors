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

// Function that returns what the player enters based on their input
function getHumanChoice() {
    const userInput = prompt("Enter a choice (rock, paper,scissors)");
    return userInput;
}

// Check if what the user enters are valid inputs and increments the score accordingly

function playRound(humanChoice, computerChoice) {
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

// playGame(3);

// DOM Manipulations for buttons




