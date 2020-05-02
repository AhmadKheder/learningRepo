'use strict'

function taName(){

    name = prompt('First name :');
    document.write(name)

}
 


var time = document.getElementById('time');
// var greeting = document.getElementById('greeting');
 
// func show time

function showTime(){
   
var today = new Date(); // current

var hour = today.getHours();   //0 - 23 
var min = today.getMinutes();   //0 - 59
var sec = today.getSeconds();   //0 - 59
// console.log("AAAA")
var AmPm ;
if (hour >= 12){
    AmPm = 'PM';
    
}else{
    AmPm = 'AM';
}
// console.log("BBBB")

time = hour - 12 +':'+ min +':'+ sec + AmPm
// console.log("CCCCCC")
document.getElementById("time").innerHTML =time;
// console.log("DDDD")
setTimeout(showTime, 1000);
return time
}

// greeting func
function greeting(hour){
    if(hour>18 && hour <= 23 ){
        greeting = "Good Morning";

    }else if(hour > 12 && hour <=18){
        greeting = "Good Afternoon";
    }else{
        greeting = "Good evning";
    }
    document.getElementById("greeting").innerHTML=greeting
return greeting;
}
