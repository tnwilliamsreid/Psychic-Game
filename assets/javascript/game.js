//will hold all letters that I am thinking of//
var letters = ["t", "a", "n"];

//will hold all letters guessed by user//
var guessedLetters = [];

//will hold one of the three letters from var above//
var letterToguess = null;

// This is what we'll use to count down
var guessesRemaining = 9;

//will hold score of the wins and losses//
var wins = 0;
var losses = 0;

var updateGuessesRemaining = function() {
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesThusFar = function() {
  document.querySelector("#guesses-thus-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  guessesRemaining = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesRemaining();
  updateGuessesThusFar();
};

updateLetterToGuess();
updateGuessesRemaining();

document.onkeydown = function(event) {
  guessesRemaining--;

  var letter = event.key.toLowerCase();

  guessedLetters.push(letter);

  updateGuessesRemaining();
  updateGuessesThusFar();


  if (letter === letterToGuess) {

    wins++;
    document.querySelector("#wins").innerHTML = wins;

    reset();
  }

  if (guessesRemaining === 0) {

    losses++;
    document.querySelector("#losses").innerHTML = losses;

    reset();
  }
};