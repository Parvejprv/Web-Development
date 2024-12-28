/* 

Arrow function, Anonymous funtion, function with default parameter:-
--------------------------------------------------


Function with default parameter 
---------------------------------
let demo = (x = 10, y = 20) => {
  console.log(`Result is: ${x+y}`)
}

demo();   // 30 (this would gonna run with default parameter)


// let demo = (x = 10, y = 20) => {
//   console.log(`Result is(result with default parameter): ${x+y}`)
// }

demo();   // 30 (this would gonna run with default parameter)

// Note: we can pass one parameter, then it gonna take one value from the parameter and another value from the default parameter




// What are the formal argument, and what is the actual argument? explain a bit more about each.

// Argument that we have pass while defining the function is known as formal argument
function demo(x, y, z)  {     // here- x, y, z are the formal argument
  console.log(x*y*z);
}

demo(10, 20, 3);     // 600   (here- argument that is passed while calling the function is known as actual argument )



// Without using the keyword argument
let demo = (x, y) => {
  alert(x-y);
}


demo(x=20, y=30);   // -10
demo(x=30, y=20);   // 10



// Keyword argument in JS
let demo = (x, y) => {
  alert(x - y);
}

demo(x=20, y=30);   // -10
demo(y=30, x=20);   // 10




*/



/* 
Note: 

1). Kisi bhi form  control se uski value ko get ya set karna hai toh hum value attribute ka use karte hain.


2). Agar kisi tag se uske text ko get ya set karni ho toh hum innerText ka use karte hain.Agar

*/






