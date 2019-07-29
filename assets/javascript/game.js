var teams = ["jets", "wild", "devils", "rangers", "islanders", "sharks", "kings", "flyers", "penguins"]
var word = "";
var letters = [];
var blanks = 0;
var LetterCount = [];
var wrongGuesses = [];
var letterGuessed = "";
var wins= 0;
var losses = 0;
var Guesses = 10;

function startGame() {
  Guesses = 10;
  LetterCount = [];
  wrongGuesses = [];

  word = teams[Math.floor(Math.random() * teams.length)];
  letters = word.split("");
  blanks = letters.length;
  console.log(word);

  for (var i = 0; i < blanks; i++) {
    if (letters[i] === " ") {
      LetterCount.push("*");
    } else {
      LetterCount.push("_");
    }
  }

  console.log(LetterCount);

  document.getElementById("guesses-left").innerHTML = "Number of Guesses: " + Guesses;
  document.getElementById("wordToGuess").innerHTML = LetterCount.join(" ");
  document.getElementById("wrong-guesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join(" ");
}

function checkLetters(letter) {
  var letterInWord = false;

  for (var i = 0; i < blanks; i++) {
     if (word[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {
      if (word[i] === letter) {
        LetterCount[i] = letter;
      }
    }

    console.log(LetterCount);
  }

  else {
    wrongGuesses.push(letter);
    Guesses--;
  }

}

function roundComplete() {
  console.log("Win Count: " + wins+ " | Loss Count: " + losses + " | Num Guesses: " + Guesses);

  document.getElementById("guesses-left").innerHTML = "Guesses Left: " + Guesses;
  document.getElementById("wordToGuess").innerHTML = LetterCount.join(" ");
  document.getElementById("wrong-guesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join(" ");

  if (letters.toString() === LetterCount.toString()) {
    wins++;
    alert("You Win!");
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    startGame();
  }

  else if (Guesses === 0) {
    losses++;
    alert("You Lose!");
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    startGame();

  }

}

startGame();
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuessed = event.key;

    if (wrongGuesses.indexOf(letterGuessed) !== -1) {
      alert("You already guessed that letter.");
      return;
    }
    checkLetters(letterGuessed);
    roundComplete();

  }

};
  