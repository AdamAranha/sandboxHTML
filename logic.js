

var playerOption
var compOption
var rps = ["rock", "paper", "scissors"]


function onYourMarks(choice) {
    playerChoice(choice);
    compChoice();
    decideWinner();
}

function playerChoice(choice) {
    playerOption = choice
    console.log(`Player chose ${playerOption}`)
}

function compChoice() {
    compOption = rps[Math.floor(Math.random() * 3)]
    console.log(`Computer chose ${compOption}`)
    document.querySelector("#comp").innerHTML = compOption
}

function winnerWinner(winner) {
    document.querySelector("#winnerwinner").innerHTML = winner
}

function outcome() {
    if (compOption === "rock") {
        console.log(`It's a tie`)
        winnerWinner("We're all winners . . . it's a tie")
    } else if (compOption === "paper") {
        console.log(`Comp wins`)
        winnerWinner("Comp wins")
    } else {
        console.log(`Player wins`)
        winnerWinner("Player wins")
    }
}

function decideWinner() {

    switch (playerOption) {

        case "rock":
            outcome()
            break;

        case "paper":
            outcome()
            break;

        case "scissors":
            outcome()
            break;
    }
}

