// this is contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementsByName('email')[0];
    var errorMessage = document.getElementById('error-message');
    if (emailInput.value !== emailInput.value.toUpperCase()) { //Yaser Commit
        event.preventDefault();
        errorMessage.textContent = 'Faiz contact validation';// Binyam commit
      } else {
        errorMessage.textContent = '';
      }
})