let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 3;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    let attempts = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
        document.getElementById('guessButton').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }

    attempts.textContent = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById('guessButton').disabled = true;
    }
});
