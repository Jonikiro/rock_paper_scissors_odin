function computerPlay() {
    let rpsList = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return rpsList[choice];
}

function round(playerChoice, cpuChoice) {
    const containerChoices = document.getElementById("choices");
    const containerResults = document.getElementById("results");
    const containerScore = document.getElementById("score");
    const containerEnd = document.getElementById("end");

    containerChoices.textContent = "You selected " + playerChoice + "\n"
        + "The computer selected " + cpuChoice;

    if (playerChoice == cpuChoice) {
        containerResults.textContent = "It's a tie. " + playerChoice 
        + " ties against " + cpuChoice + ".\n\n";
        return;
    }

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == "Paper") {
                containerResults.textContent = "You lose. Rock loses to Paper.\n\n";
                cpuScore++;
            } else { 
                containerResults.textContent = "You win! Rock beats Scissors!\n\n";
                playerScore++;
            }
            break;
        case "Paper" : 
            if (cpuChoice == "Scissors") {
                containerResults.textContent = "You lose. Paper loses to Scissors.\n\n";
                cpuScore++;
            } else {
                containerResults.textContent = "You win! Paper beats Rock!\n\n";
                playerScore++;
            }
            break;
        case "Scissors" : 
            if (cpuChoice == "Rock") {
                containerResults.textContent = "You lose. Scissors loses to Rock.\n\n";
                cpuScore++;
            } else {
                containerResults.textContent = "You win! Scissors beats Paper!\n\n";
                playerScore++;
            }
            break;
        default: 
            break;
    }

    if (playerScore < 5 && cpuScore < 5){
        containerScore.textContent = "The current score is: Player - " + playerScore 
        + "   CPU - " + cpuScore + "\n\n";
    } else {
        containerScore.textContent = "The final score is: Player - " + playerScore 
        + "   CPU - " + cpuScore + "\n\n";
    
        if (playerScore > cpuScore)
            containerEnd.textContent = "You win!\n\nThanks for playing!";
        else if (playerScore < cpuScore)
            containerEnd.textContent = "You lose.\n\nThanks for playing!";
        else
            containerEnd.textContent = "It's a tie.\n\nThanks for playing!";
    }

    return;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = button.textContent;
        round(playerChoice, computerPlay());
    });
});

let playerScore = 0;
let cpuScore = 0;