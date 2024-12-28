/*  Simple Calculator */

function calculate(button) {
  // console.log(button);
  console.log(button.value);
  // console.log(typeof(button.value));

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if(isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }

  if(num1 === null || num2 === null) {
    alert("Both numbers are required.");
    return;
  } 

  let operation = button.value;   // button object value


  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
      result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if(num2 === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    result = num1 / num2;
  } else {
    alert("Invalid operation");
    return;
  }

  document.getElementById('result').innerText = result;
}

