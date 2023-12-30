
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;
      let action = thisForm.getAttribute('action');
      
      if( ! action ) {
        return;
      }

      thisForm.querySelector('.sent-message').classList.remove('d-block');

    });
  });

  function php_email_form_submit(thisForm, action, formData) {

    
    then(data => {
      if (data.trim() == 'OK') {
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }


})();
