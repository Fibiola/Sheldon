// This is the regular Rock paper scissors game in Javascript - to be run in a browser.

// a.) user makes a choice
// b.) computer makes a choice
// c.) compare - function determines who wins

//a.) We declare a variable and make it equal to users input
var userChoice = prompt("So, what will you pick? Rock, paper or scissors?");


//b.) We want the computer to make it's choice randomly. Math.random() will equal a number between 0 and 1.
var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (0.33 < computerChoice < 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Function that takes two parameters - if both pick the same thing you get a tie message
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
// if choice 1 = rock and choice 2 equals paper -> paper wins.
    if (choice1 === "rock") {
        if (choice2 === "paper") {
            return "Paper covers rock and wins!";
        } else if (choice2 === "scissors") {
            return "Rock beats scissors and wins!";
    }
}
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper covers rock and wins!";
        } else if (choice2 === "scissors") {
            return "Scissors cut the paper up and win!";
        }
    }
};

console.log(compare(userChoice, computerChoice));