/* 
Anonymous function 
====================
A function which does not have any name is known as anonymous function.

Example:-

function () {
  statement
  statement
  statement
  statement
}




// Normal function to call a function after 5 second each
function demo() {
  laert("ok");
}
window.setInterval(demo, 3000);

// Write an anonymous function that gonna call after 5 second each 
setInterval(function () {
  alert("OK");
} ,5000);

// Note:- Here setInterval(() => {}, 1000); takes a callback function within it.



// How can we apply anonymous function with the help of arrow function

window.setInterval(() => {
  
}, 5000);

*/



