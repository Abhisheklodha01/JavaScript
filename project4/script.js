let RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowNhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        valiDateGuess(guess)
    })
}

function valiDateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    }
    else if (guess < 1) {
        alert("please enter a number grater than 1 ")
    }
    else if (guess > 100) {
        alert("please enter a number less than 100 ")
    }

    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${RandomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < RandomNumber) {
        displayMessage(`Number is TO Low`)
    }
    else if (guess > RandomNumber) {
        displayMessage(`Number is TO High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowNhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute("disabled", '')
    p.classList.add('button')
    p.innerHTML = `<button id = "newgame">Start new Game</button>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function (e) {
        RandomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}















