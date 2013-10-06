/* Sheldon: "It's very simple. Scissors cuts paper, paper covers rock,
rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors
 decapitates lizard, lizard eats paper, paper disproves Spock, Spock
 vaporizes rock, and—as it always has—rock crushes scissors" */


// a.) User makes a selection. We store it in a variable and turn it into lowercase.
$(document).ready(function() {
    $(".pull-me").click(function() {
    $(".panel").slideToggle("slow");

var userChoice = prompt("Make your choice: lizard, rock, spock, paper or scissors?").toLowerCase();


});

// b.) Computer randomly makes a selection
var computerChoice = Math.random();
    if (computerChoice <= 0.2) {
        computerChoice = "rock";
    } else if (computerChoice > 0.2 && computerChoice <= 0.4) {
        computerChoice = "lizard";
    } else if (computerChoice > 0.4 && computerChoice <= 0.6) {
        computerChoice = "spock";
    } else if (computerChoice > 0.6 && computerChoice <= 0.8) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }


// c.) Combinations what should happen

var combinations = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "You both chose " + choice1 + ". " + "It's a tie!";
    }
    else {
        if (choice1 === "rock") {
            if (choice2 === "lizard") {
                return "Rock crushes lizard! Computer wins!";
            }
            else if (choice2 === "spock"){
                return "Spock vaporizes rock. You win!";
            }
            else if (choice2 === "paper") {
                return "Paper covers rock! You win!";
            }
            else if (choice2 === "scissors"){
                return "Rock crushes scissors! Computer wins!";
            }
            else {}
        }

        else if (choice1 === "lizard") {
            if (choice2 === "rock") {
                return "Rock crushes lizard! You win!";
            }
            else if (choice2 === "spock") {
                return "Lizard poisons Spock! Computer wins!";
            }
            else if (choice2 === "paper") {
                return "Lizard eats paper! Computer wins!";
            }
            else if (choice2 === "scissors") {
                return "Scissors decapitates lizard! You win!";
            }
            else {}
        }

        else if (choice1 === "spock") {
            if (choice2 === "rock") {
                return "Spock vaporizes rock! Computer wins!";
            }
            else if (choice2 === "lizard") {
                return "Lizard poisons Spock! You win!";
            }
            else if (choice2 === "paper") {
                return "Paper disproves Spock! You win!";
            }
            else if (choice2 === "scissors") {
                return "Spock smashes scissors! Computer wins!";
            }
            else {}
        }

        else if (choice1 === "paper") {
            if (choice2 === "lizard") {
                return "Lizard eats paper! You win!";
            }
            else if (choice2 === "rock") {
                return "Paper covers rock! Computer wins!";
            }
            else if (choice2 === "spock") {
                return "Paper disproves Spock! Computer wins!";
            }
            else if (choice2 === "scissors") {
                return "Scissors cut paper! You win!";
            }
            else {}
        }
        else if (choice1 === "scissors") {
            if(choice2 === "lizard") {
                return "Scissors decapitates lizard! Computer wins!";
            }
            else if (choice2 === "rock") {
                return "Rock crushes scissors! You win!";
            }
            else if (choice2 === "spock") {
                return "Spock smashes scissors! You win!";
            }
            else if (choice2 === "paper") {
                return "Scissors cuts paper! Computer wins!";
            }
            else {}
        }
        else {}
        }
    };

// calling the function inputing computer and user choices as inputs.

document.write("You chose " + userChoice + ".");
document.write("<br>");
document.write("Computer chose " + computerChoice + ".");
document.write("<br>");
document.write(combinations(computerChoice, userChoice));