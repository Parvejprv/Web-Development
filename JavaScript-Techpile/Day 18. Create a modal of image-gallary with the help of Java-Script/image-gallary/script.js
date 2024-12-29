/* onMouseOver and onMouseLeave */

let onMouseOverImageGallary = (x) => {
  let mainContentObj = document.querySelector('.main-image');
  // console.log("mainContentObj:", mainContentObj);
  // console.log(mainContentObj.src);
  mainContentObj.src = x.src;
}

let onMouseLeaveImageGallary = (x) => {
  let mainContentObj = document.querySelector(".main-image");
  mainContentObj.src = "../../images/image1.webp"
}

const thumbnailContainer = document.getElementById('thumbnail-container');
// Function to handle auto-scrolling when hovering over the thumbnails
thumbnailContainer.addEventListener('mousemove', (event) => {
  const containerWidth = thumbnailContainer.offsetWidth;
  const contentWidth = thumbnailContainer.scrollWidth;
  const mouseX = event.clientX - thumbnailContainer.getBoundingClientRect().left;

  const scrollPercentage = mouseX / containerWidth;
  const scrollPosition = (contentWidth - containerWidth) * scrollPercentage;
  thumbnailContainer.scrollLeft = scrollPosition;
});
