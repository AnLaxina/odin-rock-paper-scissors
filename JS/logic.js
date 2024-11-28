// Function that returns the "computer's" choice.
// Returns a random string: "rock", "paper", "scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
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

        // if (humanChoiceLowered === "rock" && computerChoice == "scissors") {
        //     humanScore++;
        //     console.log("You win! Rock beats scissors!");
        // }
        // else if (humanChoiceLowered === "paper" && computerChoice == "scissors") {
        //     humanScore++;
        //     console.log("You win! Rock beats scissors!");
        // }
        // if (humanChoiceLowered === "scissors" && computerChoice == "scissors") {
        //     humanScore++;
        //     console.log("You win! Rock beats scissors!");
        // }

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
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("Both played Paper! No change in score.");
                    humanScore++;
                }
                else {
                    console.log("You lose! Rock beats Paper.");
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

let humanScore = 0;
let computerScore = 0;



