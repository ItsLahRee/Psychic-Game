
console.log("linked")
var wins = 0
var losses = 0
var guessesLeft = 10
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
var computerGuess = lettersArray[Math.floor(Math.random()*lettersArray.length)]
var yourGuessesSoFar = []
//DOM elements//
var winsEl = document.getElementById("wins")
var lossesEl = document.getElementById("losses")
var guessesEl = document.getElementById("guesses-left")
var userGuessesEl = document.getElementById("your-guesses-so-far")

// add three others//
var updateDisplay = function (){
winsEl.textContent = wins
lossesEl.textContent = losses
userGuessesEl.textContent = yourGuessesSoFar
guessesEl.textContent = guessesLeft
console.log(computerGuess)
}
updateDisplay()
//create on key up event//
document.onkeyup = function(event) {
   
    if (guessesLeft > 0){
        console.log (event.key) 
        yourGuessesSoFar.push(event.key)
        guessesLeft--
        console.log(yourGuessesSoFar);
        
        if (computerGuess == event.key){
            console.log("You won!")
            wins ++
            alert ("You win!")
            guessesLeft = 10
            computerGuess = lettersArray[Math.floor(Math.random()*lettersArray.length)]
            yourGuessesSoFar = []
        }
        
    }
    else {
        console.log("You loose!")
            losses ++
            alert ("You loose!")
            guessesLeft = 10
            computerGuess = lettersArray[Math.floor(Math.random()*lettersArray.length)]
            yourGuessesSoFar = []

        }
        updateDisplay ()
}


/* Psychc Game
3. Guess what letter I'm thinking of
4. Wins: (# of times the user has guessed the letter correctly)
5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
6. Guesses Left: (# of guesses left. This will update)
7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).*/