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




function onFocusBlurHandler(x) {
  let txt1 = x;  //Get the reference from the parameter x
  let btnSave = document.querySelector("#button1");
  let p1 = document.querySelector("#p1");

  btnSave.style.display = "none";   // Hide the button initially

  if(txt1.value.length === 6) {
    p1.innerHTML = `Valid pincode.`;
    btnSave.style.display = "block";    // Show button
    p1.style.backgroundColor = "green";
    txt1.style.border = "1px solid green";
    txt1.style.color = "#000";
  } else {
    p1.innerHTML = `Invalid pincode, pincode should be 6 digit long.`;
    btnSave.style.display = "none";   // Hide button
    p1.style.backgroundColor = "red";
    txt1.style.border = "1px solid red";
    txt1.style.color = "#000";
  }
}

