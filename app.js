const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')     //so all are all btn affected
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    
}))

function generateComputerChoice()  {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
    
}

function getResult() {
    if (computerChoice === userChoice) {
        result = '¡¡ Its a Draw !!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
        result = '¡¡ Winner !!'
    }

    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = '¡¡ Looser !!'
    }

    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = '¡¡ Winner !!'
    }

    if (computerChoice === 'paper' && userChoice === "rock") {
        result = '¡¡ ¡Looser! !!'
    }

    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = '¡¡ Winner !!'
    }

    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = '¡¡ looser !!'
    }
    
resultDisplay.innerHTML = result
    
}