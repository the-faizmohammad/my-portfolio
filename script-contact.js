document.getElementById('contact-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementsByName('email')[0];
    var errorMessage = document.getElementById('error-message');
    
    if (emailInput.value !== emailInput.value.toLowerCase()) { // Make this Lower case
      event.preventDefault();
      errorMessage.textContent = 'Please enter your email in lowercase.';
    } else {
      errorMessage.textContent = '';
    }
  });