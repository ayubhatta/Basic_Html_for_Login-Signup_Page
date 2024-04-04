document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
  
    // Show signup form and hide login form
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
    });
  
    // Show login form and hide signup form
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    });
  });
  