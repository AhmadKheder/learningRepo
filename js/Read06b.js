'use strict'


name = prompt('First name :');
 
 name.innerHTML = `<span>${name}</span>`

document.getElementById('name').innerHTML.replace= `<span>${name}</span>`


confirm("Hey " +name+"\nPress a button");
// var time = document.getElementById('time');
// var greeting = document.getElementById('greeting');
 

// func show time

// function showTime(){
// let today = new Date(); // current

// hour = today.getHours();
// min = today.getMinutes();
// sec = today.getSeconds();

// var AmPm ;
// hour =hour % 12 || 12;
// if (hour >= 12){
//     AmPm = 'PM';
    
// }else{
//     AmPm = 'AM';
// }

// time.innerHTML =  `${hour}<span>:</span>${min}<span>:</span>${sec}`; 
// setTimeout(showTime, 1000);


// }

// showTime();