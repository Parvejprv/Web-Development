/* 
Event handeling:-
==================
Event handeling means any action that we used to perform is done by the event handeling, like- click, onfocus, onblur, onkeypress, onkeyup, onmouseover, onmouseleave, onmouseenter etc.

onkeypress - this event is used to perform action or called the function after pressing button and before doing it action.

for example,

let suppose I write a function as demo and that is defined as given, demo() {alert("ok")} and call that function at event onkeypress then alert message will be pop-up just after pressing the key from keyboard then it would type that word.


onkeyup - this event is used to call it function that is called on this event after onkeyup event. 


*/


// function demo() {
//   alert("OK");
// }


// let onKeyPressHandler = () => {
//   let keypressObj = document.getElementById("keypress");
//   // console.log(keypressObj);
//   // console.log(keypressObj.value);
//   p1.innerText = keypressObj.value;
// }

// let onKeyUpHandler = () => {
//   let keyupObj = document.getElementById("keyup");
//   p2.innerText = keyupObj.value;
//   console.log(keyupObj);
//   console.log(keyupObj.value);
// }



function keyPressHandler(x) {
  document.querySelector("#p2").innerHTML = `String that you have entered: ${x.value} <br> And length of the string is: ${x.value.length}.`;
}

