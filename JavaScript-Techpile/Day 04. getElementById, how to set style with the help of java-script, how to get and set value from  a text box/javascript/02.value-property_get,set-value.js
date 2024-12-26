/* 
value property in JavaScript 
==============================


*/



// Qs 02. Here we want to get the value from the form control so we need to select those form control first.


// function myFun() {
//   let x = document.getElementById("txt");   // this will get the obj
//   alert(x.value);
// }




// Let suppose we want to add the value from the text box that you have entered

// function calSum() {
//   let val1 = document.getElementById('txt3').value;
//   let val2 = document.getElementById('txt4').value;

//   // Parse the values as integers
//   let num1 = parseInt(val1);
//   let num2 = parseInt(val2);

//   let sum = (num1+num2);
//   // let a = alert("Sum = "+ sum);
//   console.log(sum);
// }






// Get and set the value

// function displayName() {
//   let x = document.getElementById("txt").value;
//   // var x1 = document.getElementById('txt1').value = x
//   alert("Name is : " + x);
  
//   // set value , 
//   // document.getElementById("txt1").value = "Qalbi Alfaz";    // a static value
// }









// Get the value of a text-box, and set to it to another text box

function displayName() {
  let obj = document.getElementById("txt");   // first text-box object
  var obj1 = document.getElementById('txt1');   // second text box object
  let firstTextBoxVal = obj.value;    // value from the first text box
  
  // set value
  let nowSecondTextBoxVal = obj1.value =  firstTextBoxVal;    // set value of 1st text box to the second text box


  console.log('1st : ', firstTextBoxVal);
  console.log('2nd : ', nowSecondTextBoxVal);

  // let secondTextVal = document.getElementById('txt1').value; 

}


// To set the value 
// var x1 = document.getElementById('txt1').value = x
// document.getElementById('txt1').value = "Qalbi Alfaz";  // a static value

 


