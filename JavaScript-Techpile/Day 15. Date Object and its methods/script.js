/*  
Date object in JavaScript:-
===============================
=> Date object is providing some method related to the current date and time.

Syntax:
---------
var d = new Date();   // object of date

here are the some of the method that provided by Date object.

- getDate() => Current date 
- getDay()  => 0-6, 0-Monday, 1-Tuesday ...
- getMonth()  =>  0-11, 0-January, 1-febuary, 3-march ....
- getFullYear()  =>  2024 (current year)
- getHours()    => 18 current-hour(18)
- getMinutes()  => 27 (current minute 27)
- getSeconds()  => second (0-59)
- getMiliseconds()    => (0-999)
- getWeek()

*/






/* 


// Let suppose we want to get the date in format - 22-10-2024

var now = new Date();
console.log(now);


const date = String(now.getDate()).padStart(2, "0");
const month = now.getMonth();
const year = now.getFullYear();
// console.log(date);
// console.log(month);
// console.log(year);

let hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

console.log(hour);
console.log(minute);
console.log(second);

// Now, if hour is greater than 


// console.log('Today\'s sDate:' + date + "/" + month + "/" + year);
// document.write("Date is : " + date + "/" + month + "/" + year);
document.write(`Today's Date is : ${date}-${month}-${year} <br/>Time : `);


*/






function updateTime() {
  var now = new Date();
  // console.log(now);

  let ampm = "";
  let hour = String(now.getHours()).padStart(2, "0");
  let minute = String(now.getMinutes()).padStart(2, "0");
  let second = String(now.getSeconds()).padStart(2, "0");

  if(hour > 12) {
    hour = hour - 12;
    ampm = "PM"
  } else {
    hour = hour == 0 ? 12 : hour; // Convert 0 to 12 for
    ampm = "AM";
  }

  // var hourEle = document.getElementById('h');
  // var minuteEle = document.getElementById('m');
  // var secondEle = document.getElementById('s');
  // var ampmEle = document.getElementById('ampm');

  var hourEle = document.querySelector("#h");
  var minuteEle = document.querySelector("#m");
  var secondEle = document.querySelector("#s");
  var ampmEle = document.querySelector("#ampm");

  hourEle.innerText = String(hour).padStart(2, "0");
  minuteEle.innerText = minute;
  secondEle.innerText = second;
  ampmEle.innerText = ampm;
}

setInterval(updateTime, 1000);



