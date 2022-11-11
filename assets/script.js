//FROM HTML ELEMENTS

var yourWin = document.getElementById('your-win');
var yourLoss = document.getElementById('your-loss');
var countDown = document.getElementById('countdown');
var testDown = document.getElementById('text-countdown');
var btnStart = document.getElementById('start-game')
var blank = document.getElementById('blank');
var timeLeft = 3; //set timeleft

var guessWords = ['javascript','spaghetti','corndog','hawaii','goldendoodle']

function pickWord(words) {
    var wordChosen = '';
    var randomNum = Math.floor(Math.random() * words.length)
    for(var i = 0; i < words.length; i++) {
        if(i === randomNum) {
            wordChosen = words[i]
        }
    }
    return wordChosen;

}

var chosenWord = pickWord(guessWords)
console.log(chosenWord) //CHOSEN WORD





function countdown() { //always create countdown function first

    
   var timeInterval = setInterval(function ()  {
        timeLeft--;
        countDown.textContent = timeLeft + ' seconds left!'

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            countDown.textContent = 'GAME OVER'
        } 
    

    } /*first parameter*/,1000 /*<--second parameter*/);
}

function keyAction(e) {
    var key = e.key;
    blank.textContent = key
}

function whereToGuess() {
}





function startGame() {


    countdown()


}
document.addEventListener('keydown',keyAction)
btnStart.addEventListener('click',startGame)



