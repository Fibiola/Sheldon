/* Sheldon: "It's very simple. Scissors cuts paper, paper covers rock,
rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors
 decapitates lizard, lizard eats paper, paper disproves Spock, Spock
 vaporizes rock, and—as it always has—rock crushes scissors" */


// a.) User makes a selection. We store it in a variable and turn it into lowercase.

/*var userChoice = prompt("Make your choice: lizard, rock, spock, paper or scissors?").toLowerCase(); */


// b.) Computer randomly makes a selection
var computerChoice = function() {
    computer = Math.random();
    if (computer <= 0.2) {
        return "rock";
    } else if (computer > 0.2 && computer <= 0.4) {
        return "lizard";
    } else if (computer > 0.4 && computer <= 0.6) {
        return "spock";
    } else if (computer > 0.6 && computer <= 0.8) {
        return "paper";
    } else {
        return "scissors";
    }
};

// c.) Combinations what should happen

var combinations = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "<br>You both chose " + choice1 + ". " + "<br>It's a tie!<br>";
    }
    else {
        if (choice1 === "rock") {
            if (choice2 === "lizard") {
                return "Computer chose rock. <br> You chose lizard. <br> Rock crushes lizard! <br> Computer wins!";
            }
            else if (choice2 === "spock"){
                return "Computer chose rock. <br> You chose Spock. <br> Spock vaporizes rock.<br> You win!";
            }
            else if (choice2 === "paper") {
                return "Computer chose rock. <br> You chose paper. <br> Paper covers rock!<br> You win!";
            }
            else if (choice2 === "scissors"){
                return "Computer chose rock. <br> You chose scissors. <br> Rock crushes scissors! <br> Computer wins!";
            }
            else {
                return "The game is not called Rock, paper, scissors, spock, lizard and " + choice2 + ". Give a valid input :) !";
            }
        }

        else if (choice1 === "lizard") {
            if (choice2 === "rock") {
                return "Computer chose lizard. <br> You chose rock. <br> Rock crushes lizard!<br> <strong>You win!";
            }
            else if (choice2 === "spock") {
                return "Computer chose lizard. <br> You chose Spock. <br> Lizard poisons Spock! <br> <strong>Computer wins!";
            }
            else if (choice2 === "paper") {
                return "Computer chose lizard. <br> You chose paper. <br> Lizard eats paper! <br> <strong>Computer wins!";
            }
            else if (choice2 === "scissors") {
                return "Computer chose lizard. <br> You chose scissors. <br> Scissors decapitates lizard!<br><strong> You win!";
            }
            else {
                return "Computer chose lizard. <br> You chose The game is not called Rock, paper, scissors, spock, lizard and " + choice2 + ". Give a valid input :) !";
            }
        }

        else if (choice1 === "spock") {
            if (choice2 === "rock") {
                return "Computer chose Spock. <br> You chose rock.<br> Spock vaporizes rock!<br> Computer wins!";
            }
            else if (choice2 === "lizard") {
                return "Computer chose Spock.<br> You chose Lizard. <br>Lizard poisons Spock!<br> You win!";
            }
            else if (choice2 === "paper") {
                return "Computer chose Spock.<br> You chose paper. <br>Paper disproves Spock!<br> You win!";
            }
            else if (choice2 === "scissors") {
                return "Computer chose Spock. <br> You chose scissors. <br> Spock smashes scissors!<br> Computer wins!";
            }
            else {
                return "The game is not called Rock, paper, scissors, spock, lizard and " + choice2 + ". Give a valid input :) !";
            }
        }

        else if (choice1 === "paper") {
            if (choice2 === "lizard") {
                return "Computer chose paper. <br> You chose lizard. <br>Lizard eats paper!<br> You win!";
            }
            else if (choice2 === "rock") {
                return "Computer chose paper. <br> You chose rock. <br>Paper covers rock!<br>Computer wins!";
            }
            else if (choice2 === "spock") {
                return "Computer chose paper. <br> You chose spock. <br>Paper disproves Spock!<br>Computer wins!";
            }
            else if (choice2 === "scissors") {
                return "Computer chose paper. <br> You chose scissors. <br>Scissors cut paper!<br>You win!";
            }
            else {
            }
        }
        else if (choice1 === "scissors") {
            if(choice2 === "lizard") {
                return "Computer chose scissors.<br> You chose lizard.<br> Scissors decapitates lizard!<br> Computer wins!";
            }
            else if (choice2 === "rock") {
                return "Computer chose scissors.<br> You chose rock.<br> Rock crushes scissors!<br> You win!";
            }
            else if (choice2 === "spock") {
                return "Computer chose scissors.<br> You chose Spock.<br> Spock smashes scissors!<br> You win!";
            }
            else if (choice2 === "paper") {
                return "Computer chose scissors.<br> You chose paper.<br> Scissors cuts paper!<br> Computer wins!";
            }

        }
        else {
        return "The game is not called Rock, paper, scissors, spock, lizard and " + choice2 + ". Give a valid input !";
        }
        }
    };

// calling the function inputing computer and user choices as inputs.



var inGame = true;

// Variable that stores function when user presses the button. inGame thing is used so user can't pick again once he already made his
//selection.
var rockPressed = function() {
    if (!inGame) return;
    var result = combinations(computerChoice(), "rock");
    document.getElementById("besedilo").innerHTML = result + "<br><div class='button' onClick='resetPressed()'><p>Play again!</p> </div>";
    inGame = false;
};

var resetPressed = function() {
    document.getElementById("besedilo").innerHTML = "<div class='newSelection'> Make a new selection!</div>";
    //tukej morem rect da zbrise jquery script ki obarva element ko je clicked.
    inGame = true;
};

var lizardPressed = function() {
    if (!inGame) return;
    var result = combinations(computerChoice(), "lizard");
    document.getElementById("besedilo").innerHTML = result + "<br> <div class='button' onClick='resetPressed()'><p>Play again!</p> </div>";
    inGame = false;
};

var paperPressed = function() {
    if (!inGame) return;
    var result = combinations(computerChoice(), "paper");
    inGame = false;
    document.getElementById("besedilo").innerHTML = result + "<br><div class='button' onClick='resetPressed()'><p>Play again!</p> </div>";

};

var scissorsPressed = function() {
    if (!inGame) return;
    var result = combinations(computerChoice(), "scissors");
    inGame = false;
    document.getElementById("besedilo").innerHTML = result + "<br><div class = 'button' onClick='resetPressed()'><p>Play again!</p> </div>";

};

var spockPressed = function() {
    if (!inGame) return;
    var result = combinations(computerChoice(), "spock");
    inGame = false;
    document.getElementById("besedilo").innerHTML = result + "<br><div class = 'button' onClick='resetPressed()'> <p>Play again!</p> </div>";

 };

