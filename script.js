var seconds = 00;
var milliseconds = 00;

var appendSeconds = document.getElementById("seconds");
var appendMilliseconds = document.getElementById("milliseconds");
var buttonStart = this.document.getElementById("start");
var buttonStop = this.document.getElementById("stop");
var buttonReset = this.document.getElementById("reset");

buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

var Interval;

/* First function that starts the timer and causes it to actually work */

function StartTimer(){
    millisec++;
    console.log(milliseconds);

    if(milliseconds < 9){
        appendMilliseconds.innerHTML = "0" + milliseconds;
    }