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
        declareWinner(`the friends we made along the way . . . it's a tie`)
    } else {

        switch (playerOption) {

            case "rock":
                if (compOption === "paper") {
                    console.log(`Comp wins`)
                    declareWinner(`the PROGRAM!`)
                } else {
                    console.log(`Player wins`)
                    declareWinner(`the USER!`)
                } break;

            case "paper":
                if (compOption === "rock") {
                    console.log(`Player wins`)
                    declareWinner(`the USER!`)
                } else {
                    console.log(`Comp wins`)
                    declareWinner(`the PROGRAM!`)
                } break;

            case "scissors":
                if (compOption === "rock") {
                    console.log(`Comp wins`)
                    declareWinner(`the PROGRAM!`)
                } else {
                    console.log(`Player wins`)
                    declareWinner(`the USER!`)
                } break;
        }
    }
}