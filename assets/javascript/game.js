var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var playerGuess=[]
var guessesLeft= 9

letterAnswer=letters[Math.random()*letters.length];

function clean(input){
    letter= letter.tolowerCase();
    letter.chatAt(0)
    return letter
}

while ((0< guessesLeft) && (playerGuess !== letterAnswer)){
    playerGuess= prompt("What letter am I thinkin of?")
}