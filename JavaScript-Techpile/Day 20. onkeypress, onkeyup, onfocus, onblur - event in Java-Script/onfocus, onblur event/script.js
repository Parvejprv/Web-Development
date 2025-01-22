/* 
Event handeling:-
==================
Event handeling means any action that we used to perform is done by the event handeling, like- click, onfocus, onblur, onkeypress, onkeyup, onmouseover, onmouseleave, onmouseenter etc.

1). onkeypress - this event is used to perform action or called the function after pressing button and before doing it action.

for example,

let suppose I write a function as demo and that is defined as given, demo() {alert("ok")} and call that function at event onkeypress then alert message will be pop-up just after pressing the key from keyboard then it would type that word.


2). onkeyup - this event is used to call it function that is called on this event after onkeyup event. 


3). onfocus - this event is used to call it function on focus event it means when our cursor goes entry to a text box. 

Ex-
String that you have entered: JavaScript Learning!
And length of the string is: 20.

String that you have entered: Java-Script
And length of the string is: 11.


4). onblur - this event is used to called the function or take action on cursor goes blur it means when our cursor goes exit from a text box.

Ex-
String that you have entered: WELCOME TO JAVA-SCRIPT LEARNING!
And length of the string is: 32.

Ex-
String that you have entered: Java-Script Learning!
And length of the string is: 21.



*/


// function demo() {
//   alert("OK");
// }


// let onFocusHandler = () => {
//   let keypressObj = document.getElementById("keypress");
//   // console.log(keypressObj);
//   // console.log(keypressObj.value);
//   p1.innerText = keypressObj.value;
// }

// let onBlurHandler = () => {
//   let keyupObj = document.getElementById("keyup");
//   p2.innerText = keyupObj.value;
//   console.log(keyupObj);
//   console.log(keyupObj.value);
// }



function onFocusBlurHandler(x) {
  document.querySelector("#p1").innerHTML = `String that you have entered: ${x.value} <br> And length of the string is: ${x.value.length}.`;
}

