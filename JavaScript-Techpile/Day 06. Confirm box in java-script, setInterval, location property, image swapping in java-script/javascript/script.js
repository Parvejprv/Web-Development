/*  

Swap the two text using a function call

*/

function swapText() {
  // Because it is not a form control, so we will used here either innerText | innerHTML
  let p1 = document.getElementById("p1"); // object of the 1st
  let p2 = document.getElementById("p2"); // object of the 2nd

  var txt1 = p1.innerText;
  var txt2 = p2.innerText;

  // set the text
  var ftxt = p1.innerText = txt2;
  var stxt = p2.innerText = txt1;

  console.log('After swapping : ', ftxt + " | " + stxt);
}


