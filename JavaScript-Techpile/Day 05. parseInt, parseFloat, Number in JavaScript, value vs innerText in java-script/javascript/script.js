/*  
conversion:-
--------------
- parseInt()  :  It is used to parse the value to an integer it remove the value after floating point. It causes the data losses.
- parseFloat()    :   It is used to parse the value to a floating point
- Number()    :   


text related:-
--------------
- innerText


*/





/*  


function add() {
  let firstObj = document.getElementById("first");
  let secondObj = document.getElementById("second");

  let num1 = parseInt(firstObj.value);
  let num2 = parseInt(secondObj.value);

  let add = (num1+num2);

  console.log(add);
}

function sub() {
  let firstObj = document.getElementById("first");
  let secondObj = document.getElementById("second");

  let num1 = parseInt(firstObj.value);
  let num2 = parseInt(secondObj.value);

  let sub = (num1-num2);

  console.log(sub);
}

function mul() {
  let firstObj = document.getElementById("first");
  let secondObj = document.getElementById("second");

  let num1 = parseInt(firstObj.value);
  let num2 = parseInt(secondObj.value);

  let mul = (num1*num2);

  console.log(mul);
}

function div() {
  let firstObj = document.getElementById("first");
  let secondObj = document.getElementById("second");

  let num1 = parseInt(firstObj.value);
  let num2 = parseInt(secondObj.value);

  let div = (num1/num2);

  console.log(div);
}

*/



// function add() {
//   let obj = document.getElementById('first');
//   let obj1 = document.getElementById('second');

//   let objVal = Number(obj.value);
//   let objVal1 = Number(obj1.value);

//   console.log("objVal : ", objVal);
//   console.log("objVal1 : ", objVal1);

//   let result = (objVal + objVal1);
//   // console.log("Result : ", result);
//   // document.write("result = " + result);
//   alert("Addition of " + objVal +", " + objVal1 + " is = " + result);

// }



// using arrow function
let add = () => {
  let obj = document.getElementById('first');
  let obj1 = document.getElementById('second');

  let objVal = Number(obj.value);
  let objVal1 = Number(obj1.value);

  console.log("objVal : ", objVal);
  console.log("objVal1 : ", objVal1);

  let result = (objVal + objVal1);
  // console.log("Result : ", result);
  // document.write("result = " + result);
  alert("Addition of " + objVal +", " + objVal1 + " is = " + result);
}