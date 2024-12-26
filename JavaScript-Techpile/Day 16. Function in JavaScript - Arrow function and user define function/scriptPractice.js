/* 
// Let suppose I want to get the form control value using the value()

 function demo(x) {
  // console.log(x);   // this would get the object
  console.log(x.value);   // this would get the object value
  x.style.backgroundColor = "yellow";
  x.style.color = "red";
  x.style.border = "20px solid black";
  x.style.borderRadius = "20px";
 }
*/




// Image Gallery
let onMouseOverImageGallary = (x) => {
  // console.log(x);     // this would get the object
  // var source = x.src;    // src
  // console.log(source);

  x.style.border = "10px groove red";
  let mainImageGallary = document.querySelector('.imgB');
  mainImageGallary.src = x.src;
  mainImageGallary.style.border = "20px groove red";
}


let imageGallaryOnMouseLeave = (x) => {
  // var source =  x.src;
  // console.log(source);

  x.style.border = "10px groove black";

  let mainImageGallary = document.querySelector('.imgB');
  mainImageGallary.src = "../images/image1.webp";

  mainImageGallary.style.border = "20px groove yellow";
}

