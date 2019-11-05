var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerGuess;
var guessesLeft = 9;

letterAnswer = letters[Math.floor(Math.random() * letters.length)];

function cleanInput(input) {
    var letter;
    letter = letter.tolowerCase();
    letter.chatAt(0);
    return letter;
}

while ((playerGuess !== letterAnswer) && (guessesLeft > 0)) {
    playerGuess = prompt("What letter am I thinkin of?");
    playerGuess = cleanInput(playerGuess);
    document.querySelector("#guesses").innerHTML += (playerGuess + " ");
    guessesLeft--;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
};
if (playerGuess === letterAnswer) {
    alert("You guessed the correct answer... YOU WON!");

} else {
    alert("You lose!");
}