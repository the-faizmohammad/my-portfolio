document.getElementById('contact-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementsByName('email')[0];
    var errorMessage = document.getElementById('error-message');
    
    if (emailInput.value !== emailInput.value.toUpperCase()) { // Make this Lower case
      event.preventDefault();
      errorMessage.textContent = 'Silly Error.';
    } else {
      errorMessage.textContent = '';
    }
  });