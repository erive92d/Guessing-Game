//FROM HTML ELEMENTS

var yourWin = document.getElementById('your-win');
var yourLoss = document.getElementById('your-loss');
var countDown = document.getElementById('countdown');
var testDown = document.getElementById('text-countdown');
var btnStart = document.getElementById('start-game')
var blank = document.getElementById('blank');
var timeLeft = 3; //set timeleft
var guessWords = ['javascript','spaghetti','corndog','hawaii','goldendoodle']
var chosenWord = pickWord(guessWords)
var chosenSplit = chosenWord.split('')
var yourWinCount = 0;
var yourLossCount = 0;

//DISPLAYS BLANK LETTERS ON SCREEN
function displayBlanks() {
    var blankLetters = '_ '
    for(var i = 0; i < chosenSplit.length; i++) {
        chosenSplit[i] = blankLetters
    }
    return chosenSplit.join(' ');
}


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


function countdown() { //always create countdown function first

    
   var timeInterval = setInterval(function ()  {
        timeLeft--;
        countDown.textContent = timeLeft + ' seconds left!'
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            countDown.textContent = 'GAME OVER'
            yourLossCount += 1;
        } 
    
    },1000);
}

function startGame() {
    countdown()
    blank.textContent = displayBlanks()
}




yourLoss.textContent = yourLossCount
yourWin.textContent = yourWinCount
btnStart.addEventListener('click',startGame)



