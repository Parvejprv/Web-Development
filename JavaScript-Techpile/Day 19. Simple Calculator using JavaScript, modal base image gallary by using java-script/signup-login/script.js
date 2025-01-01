function toggleModal(showLogin) {
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  

  if(showLogin) {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  } else {
    registerForm.style.display = "flex";
    loginForm.style.display = "none";
  }
}

function closeModal() {
  document.querySelector(".signup-register").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  toggleModal(true); // Show login form by default

  document.getElementById('login-toggle').addEventListener('click', () => {
    document.querySelector('.signup-register').style.display = 'flex';
    toggleModal(true);
  });

  document.getElementById('register-toggle').addEventListener('click', () => {
    document.querySelector('.signup-register').style.display = 'flex';
    toggleModal(false);
  });


  // toggle register login for button that is on form
  document.getElementById("register-btn").addEventListener("click", () => {
    document.querySelector('.signup-register').style.display = 'flex';
    toggleModal(false);
  });
  document.getElementById("log-in-btn").addEventListener("click", () => {
    document.querySelector('.signup-register').style.display = 'flex';
    toggleModal(true);
  });


});


