//FROM HTML ELEMENTS

var yourWin = document.getElementById('your-win');
var yourLoss = document.getElementById('your-loss');
var countDown = document.getElementById('countdown');
var testDown = document.getElementById('text-countdown');





yourWin.textContent = 'You have ' + 1 + ' win(s)';
yourLoss.textContent = 'You have ' + 2 + ' loss(es)';

var timeLeft = 10; //set timeleft

function testCount() { //always create countdown function first

    
   var timeInterval = setInterval(function ()  {
        timeLeft--;
        countDown.textContent = timeLeft + ' seconds left!'

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            countDown.textContent = 'test'
        } else {
            message()
        }





    } /*first parameter*/,1000 /*<--second parameter*/);
}

var randomText = 'Hello this is a test'
var splitText = randomText.split(' ')

function message() {

    var wordCount = 0;
    var textInterval = setInterval(function(){

        if(splitText[wordCount] === undefined) {
            clearInterval(textInterval)
        } else {
            testDown.textContent = splitText[wordCount]
            wordCount++;
        }


    },1000)

}


var thirdBox = document.getElementById('guess-title');

thirdBox.c