alert("Welcome to the Rock, Paper, Scissors game!");

let userChoice;
let cpuChoice;
let playAgain;

function gameRPS() {
    result = Math.floor(Math.random() * 3); // Generates either 0, 1, or 2
    
    if      (result == 0) return "rock";
    else if (result == 1) return "paper";
    else                  return "scissors";
}

// Start the game
do {
    do {
        userChoice = prompt("Please make your selection by entering \"rock\", \"paper\", or \"scissors\":");

        // Fixes user selection if they included quotation marks
        if (userChoice === "\"rock\"")      userChoice = "rock";
        if (userChoice === "\"paper\"")     userChoice = "paper";
        if (userChoice === "\"scissors\"")  userChoice = "scissors";
        
    } while ((userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissors"))

    cpuChoice = gameRPS();

    if (userChoice === "rock") {
        if (cpuChoice === "rock")     alert("Your opponent chose rock. It was a tie!");
        if (cpuChoice === "paper")    alert("Your opponent chose paper. You lost!");
        if (cpuChoice === "scissors") alert("Your opponent chose scissors. You win!");
    }

    if (userChoice === "paper") {

        if (cpuChoice === "rock") alert("Your opponent chose rock. You win!");
        if (cpuChoice === "paper")    alert("Your opponent chose paper. It was a tie!");
        if (cpuChoice === "scissors") alert("Your opponent chose scissors. You lose!");
    }

    if (userChoice === "scissors") {

        if (cpuChoice === "rock")     alert("Your opponent chose rock. You lose!");
        if (cpuChoice === "paper")    alert("Your opponent chose paper. You win!");
        if (cpuChoice === "scissors") alert("Your opponent chose scissors. It was a tie!");
    }

    playAgain = prompt("Want to play again? Enter \"y\" for yes or \"n\" for no.");
    
    // Fixes user selection if they included quotation marks
    // Defaults to no if any other selection is entered

    if (playAgain !== "y" && playAgain !== "n") {
        if (playAgain === "\"y\"") playAgain = "y";
        if (playAgain === "\"n\"") playAgain = "n";
        else                       playAgain = "n";
    }

} while (playAgain === "y")




