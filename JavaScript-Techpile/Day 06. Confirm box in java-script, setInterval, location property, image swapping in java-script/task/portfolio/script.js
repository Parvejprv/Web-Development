// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple form data logging (you can handle actual form submission as needed)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
  // Provide feedback to user
  alert('Your message has been sent successfully!');
  
  // Optionally reset the form
  this.reset();
});
