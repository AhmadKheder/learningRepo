'use strict'

function greetings(){

    name = prompt('First name :');
    document.write(name)

}
 



var time = document.getElementById('time');
var greeting = document.getElementById('greeting');
 

// func show time

function showTime(){
var today = new Date(); // current

var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var AmPm ;
hour = hour % 12 || 12;
if (hour >= 12){
    AmPm = 'PM';
    
}else{
    AmPm = 'AM';
}


// document.write(hour+':'+min+':'+sec)
return time.innerHTML = '<time>'+hour+':'+min+':'+sec+'</time>'
setTimeout(showTime, 1000);

// document.write(hour+':'+min+':'+sec)
 
}

showTime();