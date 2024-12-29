
/* function to get the src of the image and set the src to the modal */

let onMouseClickModalImage = (e) => {
  let modal = document.getElementById("modal");
  let modalImg = document.querySelector("#modal-image");
  modal.style.display = "flex";
  modalImg.src = e.src;
}

let closeModal = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
