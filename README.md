# Hockey Team Guess! (Repo - https://github.com/Carl-Lombardi/HockeyGuess) (Site - https://carl-lombardi.github.io/HockeyGuess/)
This is a very basic game where the user will guess the hockey team name based on the amount of dashes in the name. A user has ten guesses outside of letters in the name or else they lose. 

## Why a Hockey Team Guess?
As a huge hockey fan, I figured that a quiz that covered team names of the NHL would be fun to create and informative. The look of the site is as basic as it comes, but that was done on purpose. The purpose of the game was not to be flashy, but rather create a working, fun app.

## This site uses Javascript and JQuery 
The basic build of the site was HTML/CSS with the use of Javascript to write the code of the game and the use of JQuery to manipulate the HTML. 

## Features
This page consists of a hangman style game where the user has 10 wrong guesses if they can't win first. Upon completion or running out of guesses, a message notes a win or loss, followed by the game restarting and the users score being presented. 

## Code Example
The below is an if/else statement which describes what would occur in case of a user win or a user loss. 

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

## Installation 
No outside software is needed for installation. 

## How to Use
This is a pretty straight forward game. Upon page load, the user is presented with the game. 

## Issues and Solutions
The biggest issue that I ran into in creation of this app was a simple misspelling of a span ID which led to the app not working and my spending over 30 minutes going over the Javascript code searching for an error that was in my HTML and had nothing to do with the actual code but the naming of an ID.

## Credits
This app was created, written and developed by Carl Lombardi. 