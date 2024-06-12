// Selectors
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const feedback = document.getElementById('feedback');

// Variables
let randomNumber;
let attempts;

// Functions
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    attempts = 4;
    console.log(attempts)
    feedback.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
}

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts--;
    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        endGame();
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Please enter a valid number.';
    }
}

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
}

// Event Listeners
guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', initializeGame);

// Initialize game on page load
initializeGame();
