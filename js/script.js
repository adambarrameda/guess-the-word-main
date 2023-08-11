const guessedDisplay = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector("#letter");
const scaffold = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const numRemaining = document.querySelector("span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const setup = function (word) {
    const dots = [];
    for (const letter of word) {
        console.log(letter);
        dots.push("●");
    }
    scaffold.innerText = dots.join("");
};

setup(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = input.value;
    // console.log(guess);
    input.value = "";
    message.innerText = "";
    const vald = inputVal(guess);
    console.log(vald);
    makeGuess(vald);
});

const inputVal = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Just one letter, please.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter.";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already used this letter. Try again!"
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};