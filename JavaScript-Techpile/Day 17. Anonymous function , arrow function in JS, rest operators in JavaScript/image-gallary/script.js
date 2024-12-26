// Image Gallery
let onMouseOverImageGallary = (x) => {
  x.style.border = "5px solid #ff6347";
  let mainImageGallary = document.querySelector('.imgB');
  mainImageGallary.src = x.src;
  mainImageGallary.style.border = "10px solid #ff6347";
}

let imageGallaryOnMouseLeave = (x) => {
  x.style.border = "5px solid #ccc";
  let mainImageGallary = document.querySelector('.imgB');
  mainImageGallary.src = "/images/image1.webp";
  mainImageGallary.style.border = "10px solid #ddd";
}
