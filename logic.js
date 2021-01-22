var playerOption
var compOption
var rps = ["rock", "paper", "scissors"]


function onYourMarks(choice) {
    playerChoice(choice);
    compChoice();
    stickEmUp();
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

function declareWinner(winner) {
    document.querySelector("#winnerwinner").innerHTML = winner
}


function stickEmUp() {

    if (playerOption === compOption) {
        console.log(`It's a tie`)
        declareWinner(`We're all winners . . . it's a tie`)
    } else {

        switch (playerOption) {

            case "rock":
                if (compOption === "paper") {
                    console.log(`Comp wins`)
                    declareWinner("Comp wins")
                } else {
                    console.log(`Player wins`)
                    declareWinner(`Player wins`)
                } break;

            case "paper":
                if (compOption === "rock") {
                    console.log(`Player wins`)
                    declareWinner("Player wins")
                } else {
                    console.log(`Comp wins`)
                    declareWinner("Comp wins")
                } break;

            case "scissors":
                if (compOption === "rock") {
                    console.log(`Comp wins`)
                    declareWinner("Comp wins")
                } else {
                    console.log(`Player wins`)
                    declareWinner("Player wins")
                } break;
        }
    }
}