(function ($, Drupal, drupalSettings) {

    Drupal.behaviors.sbdUser = {
        attach: function (context, settings) {

          // https://www.drupal.org/project/drupal/issues/1912514
          // This fix is only for Safari.
          // https://gomakethings.com/fixing-safaris-back-button-browser-cache-issue-with-vanilla-js/
          window.onpageshow = function(event) {
            if (event.persisted) {
              window.location.reload();
            }
          };
        }
    };

    Drupal.behaviors.customValidation = {
      attach: function (context, settings) {

          // Validate webforms with AJAX submission.
          if (typeof Drupal.Ajax !== 'undefined') {
            // Update Drupal.Ajax.prototype.beforeSend only once.
            if (typeof Drupal.Ajax.prototype.beforeSubmitCVOriginal === 'undefined') {
              Drupal.Ajax.prototype.beforeSubmitCVOriginal = Drupal.Ajax.prototype.beforeSubmit;
              Drupal.Ajax.prototype.beforeSubmit = function (form_values, element_settings, options) {
                if (typeof this.$form !== 'undefined' && event.target.type == 'submit' && event.type == 'click') {
                  valid = submitEventsHit(this.$form[0], event, 'ajax');
                  if (!valid) {
                    this.ajaxing = false;
                    return false;
                  }
                }
                return this.beforeSubmitCVOriginal();
              };
            }
          }

          // Phone number field.
          var phoneInput = document.querySelector('#edit-phonenew-phone');
          if (phoneInput !== null ) {
              var iti = window.intlTelInput(phoneInput, {
                  separateDialCode: false,
              });

              var phoneNew = phoneInput.getAttribute('value');
              if (!phoneNew) {
                  // Initial country.
                  var initialCountry = phoneInput.getAttribute('data-webform-telephone-international-initial-country');
                  // Set initial country.
                  iti.setCountry(initialCountry);

                  // Get country data.
                  var countryData = iti.getSelectedCountryData();
                  // Set initial country code.
                  iti.setNumber('+' + countryData.dialCode);
              }
          }

          var pass1 = document.getElementById("edit-newpassword-pass1");
          var pass2 = document.getElementById("edit-newpassword-pass2");

          if (pass1 !== null && pass2 !== null) {
              var number = document.getElementById("number");
              var length = document.getElementById("length");
              var repeat = document.getElementById("repeat");

              // When the user clicks on the password field, show the message box
              pass1.onfocus = function() {
                  document.getElementById("message").style.display = "block";
                  var ps = document.getElementsByClassName("password-strength");
                  ps[0].style.display = 'block';
              }

              // When the user clicks outside of the password field, hide the message box
              pass1.onblur = function() {
                  document.getElementById("message").style.display = "none";
                  var ps = document.getElementsByClassName("password-strength");
                  ps[0].style.display = 'none';
              }

              // When the user starts to type something inside the password field
              pass1.onkeyup = function() {
                  // 3 Repeated characters.
                  if(pass1.value.length >= 8) {
                      if (!checkConsecutivecharacter(pass1.value)) {
                          repeat.classList.remove("invalid");
                          repeat.classList.add("valid");
                      } else {
                          repeat.classList.remove("valid");
                          repeat.classList.add("invalid");
                      }
                  }
                  else {
                      repeat.classList.remove("valid");
                      repeat.classList.add("invalid");
                  }

                  // Validate numbers/special chars.
                  if (isPasswordSecure( pass1.value )) {
                      number.classList.remove("invalid");
                      number.classList.add("valid");
                  } else {
                      number.classList.remove("valid");
                      number.classList.add("invalid");
                  }

                  // Validate length
                  if(pass1.value.length >= 8) {
                      length.classList.remove("invalid");
                      length.classList.add("valid");
                  } else {
                      length.classList.remove("valid");
                      length.classList.add("invalid");
                  }
              }

              pass2.onkeyup = function() {
                  checkConfirmPassword(pass2);
              }
          }

          var textField = document.querySelectorAll('input[type="text"]');
          var emailField = document.querySelectorAll('input[type="email"]');
          var passwordField = document.querySelectorAll('input[field_type="password"]');
          var selectField = document.querySelectorAll('select');
          var submitField = document.querySelectorAll('input[type="submit"]');
          var textAreaField = document.querySelectorAll('textarea');
          var radioField = document.querySelectorAll('input[type="radio"]');
          var checkboxField = document.querySelectorAll('input[type="checkbox"]');
          var globalAdressFieldId ;

          const checkOnlyRequiredValidation = (tField) => {
             let valid = false;
              const tFieldvalue = tField.value.trim();
              if(tField.hasAttribute('required')){
                  if (!isRequired(tFieldvalue)) {
                      showError(tField, Drupal.t('@label field is required.', {'@label': getFieldLabel(tField)}));
                  }else {
                      showSuccess(tField, 'Valid'+ tField.name);
                      valid = true;
                  }
              }
              else{
                  valid = true;
              }
              return valid;
          };

          const getFieldLabel = (tField) => {
              var form_id = $('#'+tField.id).closest('form').attr('id');
              return $("#" + form_id + " label[for='" + tField.id + "']").clone().children().remove().end().text();
          };

          const checkPattern = (tField) => {
              var re = new RegExp(tField.pattern);
              var valid = false;
              if (re.test(tField.value)) {
                  valid = true;
              }
              else {
                  valid = false;
                  showError(tField, Drupal.t('@label is not valid.', {'@label': getFieldLabel(tField)}));
              }
              return valid;
          };

          const setValueForRadioGroup = (tField) => {
              tField.parentElement.value = tField.value;
          };

          const checkRadioGroupValidation = (tField, inputName) =>{
            var valid = false;
            var group = document.getElementsByName(inputName);
            if (tField.hasAttribute('required')) {
              for (var i= 0; i <group.length; i++) {
                if (group[i].checked){
                  valid = true;
                  break;
                }
              }
              if (i==group.length){
                showErrorRadio(group, tField, tField.parentElement.parentElement, Drupal.t("This field is required."));
                valid = false;
              }
            }
            else {
              valid = true;
            }
            return valid;
          }

          const checkboxInputValidation = (tField) => {
              hideError(tField , 'valid option');
              let valid = false;
              if(tField.hasAttribute('required')){
                  if(tField.checked){
                      valid = true;
                      showSuccess(tField, 'Valid'+ tField.name);
                  }
                  else{
                      valid = false;
                      showError(tField, Drupal.t("This field is required."));
                  }
              }
              else{
                  valid = true;
                  showSuccess(tField, 'Valid'+ tField.name);
              }
              return valid;
          };

          const checkEmail = (eField) => {
              let valid = false;
              const email = eField.value.trim();
              if (!isRequired(email)) {
                  showError(eField, Drupal.t('@label field is required.', {'@label': getFieldLabel(eField)}));
              } else if (!isEmailValid(email)) {
                  showError(eField, Drupal.t('@label does not contain a valid email address.', {'@label': getFieldLabel(eField)}));
              } else {
                  showSuccess(eField , 'valid Email');
                  valid = true;
              }
              return valid;
          };

          const checkPurchasedate = (dField) => {
              let valid = true;
              var maxdate, purchasedate;
              var checkdate = dField.value;
              if (dField.getAttribute("data-drupal-date-format") == 'd/m/Y'){
                var dateParts = dField.value.split("/");
                purchasedate = new Date(dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]);
                var mdateParts = dField.max.split("/");
                maxdate = new Date(mdateParts[2] + '/' + mdateParts[1] + '/' + mdateParts[0]);
              }
              else if(dField.getAttribute("data-drupal-date-format") == 'd-m-Y'){
                var dateParts = dField.value.split("-");
                purchasedate = new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0]);
                var mdateParts = dField.max.split("-");
                maxdate = new Date(mdateParts[2] + '-' + mdateParts[1] + '-' + mdateParts[0]);
              }
              else{
                purchasedate = new Date(dField.value);
                maxdate = new Date(dField.max);
              }
              if (!isRequired(checkdate)) {
                  showError(dField, Drupal.t('@label field is required.', {'@label': getFieldLabel(dField)}));
                  valid = false;
              }
              else if (((dField.value != '' && purchasedate == 'Invalid Date')) || (dField.value.length < 10)) {
                  showError(dField, Drupal.t('Enter a valid date.'));
                  valid = false;
              }
              else if (purchasedate > maxdate) {
                  showError(dField, Drupal.t('You must not enter future date to register.'));
                  valid = false;
              }
              return valid;
          };

          const checkProductDateCode = (pField) => {
              var valid;
              if (pField.value != '' && pField.hasAttribute('pattern')) {
                  valid = checkPattern(pField);
                  return valid;
              }
          };

          const checkPostalCode = (pField) => {
              // Only for dewalt.com & dewalt.ca.
              let valid = true;
              let market  = drupalSettings.sbd_language_switch.default_country;
              if (market == 'US' || market == 'CA') {

                // Postal code validation for US & CA.
                label = getFieldLabel(pField);
                inputZip = pField.value;

                if (inputZip) {
                    // Get country.
                    country = $("select[name*='[country]']").val();
                    if (country != null) {

                        // US postal code validation regex.
                        if (country == 'US') {
                            regexUSZip = /^(?!00000)\d{5}(?:[-\s](?!0000)\d{4})?$/;

                            // Validate.
                            isValidZip = regexUSZip.test(inputZip);
                            // Error.
                            if (!isValidZip) {
                                if (inputZip.length <= 5) {
                                    showError(pField, Drupal.t('Enter a valid 5-digit @label.', { '@label': label }));
                                    valid = false;
                                }
                                if (inputZip.length > 5) {
                                    showError(pField, Drupal.t('Enter a valid 9-digit @label in the format 12345-6789.', { '@label': label }));
                                    valid = false;
                                }
                            }
                        }

                        // CA postal code validation regex.
                        if (country == 'CA') {
                            regexCAZip = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
                            // Validate.
                            isValidZip = regexCAZip.test(inputZip);
                            // Error.
                            if (inputZip.indexOf(' ',3) != 3) {
                                showError(pField, Drupal.t('Enter a space after 3 letters in the @label.', { '@label': label }));
                                valid = false;
                            }
                            if (!isValidZip) {
                                if (inputZip.length != 7) {
                                    showError(pField, Drupal.t('Enter a valid 6-digit @label.', { '@label': label }));
                                    valid = false;
                                }
                                else {
                                    showError(pField, Drupal.t('Enter correct characters in the @label.', { '@label': label }));
                                    valid = false;
                                }
                            }
                        }
                    }
                }
                else {
                    showError(pField, Drupal.t('@label is required.', { '@label': label }));
                    valid = false;
                }

                if (valid) {
                    hideError(pField, '');
                }
              }

              return valid;
          };

          const passwordRequiredValidation = (pField) => {
              let valid = false;
              const password = pField.value.trim();
              if (password.length == 0) {
                  showError(pField, Drupal.t('@label field is required.', {'@label': getFieldLabel(pField)}))
                  return valid;
              }
          };

          const checkPassword = (pField) => {
              let valid = false;
              const password = pField.value.trim();
              if (password.length >= 8){
                  if (isPasswordSecure(password)) {
                      if (!checkConsecutivecharacter(password)) {
                          valid = true;
                          return valid;
                      }
                      else {
                          valid = false;
                          showError(pField, Drupal.t('@label does not meet the requirements.', {'@label': getFieldLabel(pField)}));
                          return valid;
                      }

                  }
                  else {
                      valid = false;
                      showError(pField, Drupal.t('@label does not meet the requirements.', {'@label': getFieldLabel(pField)}))
                      return valid;
                  }
              }
              else {
                  if (password.length == 0) {
                      showError(pField, Drupal.t('@label field is required.', {'@label': getFieldLabel(pField)}));

                      return valid;
                  }
                  else {
                      showError(pField, Drupal.t('@label does not meet the requirements.', {'@label': getFieldLabel(pField)}));
                      return valid;
                  }
              }
          };

          const checkConfirmPassword = (pField) => {
              confirmPasswordFiedValue = pField.value.trim();
              let valid = false;
              var form = document.getElementById(pField.id).form;
              var inputs = document.getElementById(form.id).elements;
              for (i = 0; i < inputs.length; i++) {
                  if (inputs[i].nodeName === "INPUT" && inputs[i].getAttribute('field_type') === "password" && inputs[i].name === "newPassword[pass1]") {
                      passwordFieldValue = inputs[i].value;
                  }
              }
              if (!isRequired(pField)) {
                  showError(pField, getFieldLabel(pField) + ' field is required.');
              }else if (confirmPasswordFiedValue == '' || confirmPasswordFiedValue == undefined){
                  showError(pField, Drupal.t('@label field is required.', {'@label': getFieldLabel(pField)}));
              }
              else if (passwordFieldValue !== confirmPasswordFiedValue) {
                  showError(pField, Drupal.t('The password does not match.'));
              } else {
                  showSuccess(pField , Drupal.t('Password Matched.'));
                  valid = true;
              }
              return valid;
          };

          const isEmailValid = (email) => {
              var re = /^(?:[a-zA-Z0-9!#$%&amp'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&amp'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
              var firstPart = email.substr(0,1);
              var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
              var flag = specialChars.test(firstPart);
               if(flag == false && email.length < 65){
                  return re.test(email);
              }
              else{
                  return false;
              }
          };

          const isPasswordSecure = (password) => {
              var valid;
              const pattern1 = /\d/;
              const pattern2 = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
              if(pattern1.test(password) || pattern2.test(password)){
                  valid = true;
                  return valid;
              }
              else{
                  valid = false;
                  return valid;
              }
          };
          function checkConsecutivecharacter(input){
              var format = /(.)\1\1/ ;
              return format.test(input);
          }

          const isRequired = value => value === '' ? false : true;
          const isBetween = (length, min, max) => length < min || length > max ? false : true;

          const showError = (input, message) => {
              // get the form-field element
              var formField = input.parentElement;

              // add the error class
              input.classList.remove('valid');
              input.classList.add('error');

              // show the error message
              var error = formField.querySelector('strong');
              if(error == undefined || error == null){
                  let strong = document.createElement('strong');
                  formField.appendChild(strong);
                  var error = formField.querySelector('strong');
                  error.classList.remove('valid');
                  error.classList.add('error');
                  error.classList.add('form-item--error-message');
                  error.textContent = message;
              }else{
                  error.classList.remove('valid');
                  error.classList.add('error');
                  error.classList.add('form-item--error-message');
                  error.textContent = message;
              }
          };

          const showErrorRadio = (group, inputElement, input, message) => {
            // get the form-field element
            var formField = input.parentElement;

            // add the error class
            input.classList.remove('valid');
            input.classList.add('error');

            // show the error message
            var error = formField.querySelector('strong');
            if(error == undefined || error == null){
                let strong = document.createElement('strong');
                formField.appendChild(strong);
                var error = formField.querySelector('strong');
                error.classList.remove('valid');
                error.classList.add('error');
                error.classList.add('form-item--error-message');
                error.textContent = message;
                for (var i= 0; i <group.length; i++) {
                  group[i].classList.add('error');
                }
                if (inputElement.classList.contains('country-res')) {
                  error.style.position = 'inherit';
                }
            }else{
                error.classList.remove('valid');
                error.classList.add('error');
                error.classList.add('form-item--error-message');
                error.textContent = message;
                for (var i= 0; i <group.length; i++) {
                  group[i].classList.add('error');
                }
                if (inputElement.classList.contains('country-res')) {
                  error.style.position = 'inherit';
                }
            }
          };

          const hideErrorRadio = (group) => {
              for (var i= 0; i <group.length; i++) {
                  group[i].classList.remove('error');
              }
          };

          const hideError = (input, message) => {
              // get the form-field element
              const formField = input.parentElement;
              // hide the error class
              formField.classList.remove('valid');
              input.classList.remove('valid');
              const error = formField.querySelector('strong');
              if(error != undefined || error != null) {
                error.remove();
                input.classList.remove('error');
              }

          };

          const showSuccess = (input , message) => {
              // get the form-field element
              const formField = input.parentElement;

              // remove the error class
              formField.classList.remove('error');
              formField.classList.remove('form-item--error-message');

              // remove the strong error element.
              hideError(input, 'valid option');

              if(input.getAttribute('field_type') == 'password') {
                  input.classList.add('valid');
                  // hide the error message
                  var error = formField.querySelector('strong');
                  if(error == undefined || error == null){
                      let strong = document.createElement('strong');
                      formField.appendChild(strong);
                      var error = formField.querySelector('strong');
                      error.classList.remove('error');
                      error.classList.remove('form-item--error-message');
                      error.classList.add('valid');
                      error.textContent = message;
                  }
                  else{
                      error.classList.remove('error');
                      error.classList.remove('form-item--error-message');
                      error.classList.add('valid');
                      error.textContent = message;
                  }
              }
          }

          for(let i= 0 ;i < emailField.length; i++ ){
              emailField[i].addEventListener('blur', (event) =>{
                  checkEmail(emailField[i]);
              })
              emailField[i].addEventListener('focus', (event) =>{
                  hideError(emailField[i] , 'valid Email');
              });
          }
          for(let i= 0 ;i < textField.length; i++ ){
              textField[i].addEventListener('blur' , (event)=>{
                  checkOnlyRequiredValidation(textField[i]);
                  if (checkOnlyRequiredValidation(textField[i])) {
                    if (textField[i].value != '' && textField[i].hasAttribute('pattern')) {
                        checkPattern(textField[i]);
                    }
                    if (textField[i].value != '' && textField[i].name == "basic_address[postal_code]") {
                        checkPostalCode(textField[i]);
                    }
                  }

              });
              textField[i].addEventListener('focus', (event) =>{
                  hideError(textField[i] , 'valid' + textField[i].name);
              });
          }
          for(let i= 0 ;i < passwordField.length; i++ ){
              passwordField[i].addEventListener('blur' , (event)=>{
                  if(passwordField[i].name == 'signInPassword' || passwordField[i].name == "currentPassword" || passwordField[i].name == "signInEmailAddress") {
                      passwordRequiredValidation(passwordField[i]);
                  }
                  if(passwordField[i].name == 'newPassword[pass1]') {
                      checkPassword(passwordField[i]);
                  }
                  if(passwordField[i].name == 'newPassword[pass2]') {
                      checkConfirmPassword(passwordField[i]);
                  }
              });
              passwordField[i].addEventListener('focus', (event) =>{
                  hideError(passwordField[i] , 'valid Password');
              });
          }
          for(let i= 0 ;i < selectField .length; i++ ){
              selectField[i].addEventListener('blur' , (event)=>{
                  checkOnlyRequiredValidation(selectField[i]);
              });
              selectField[i].addEventListener('focus', (event) =>{
                  hideError(selectField[i] , 'valid' + selectField[i].name);
              });
          }

          for(let i= 0 ;i < textAreaField.length; i++ ){
              textAreaField[i].addEventListener('blur' , (event)=>{
                  checkOnlyRequiredValidation(textAreaField[i]);
              });
              textAreaField[i].addEventListener('focus', (event) =>{
                  hideError(textAreaField[i] , 'valid' + textAreaField[i].name);
              });

          }
          for(let i = 0 ;i < radioField.length; i++ ){
              radioField[i].addEventListener('blur' , (event)=>{
                checkRadioGroupValidation(radioField[i], radioField[i].name);
              });
              radioField[i].addEventListener('focus', (event) =>{
                  var focusGroup = document.getElementsByName(radioField[i].name);
                  hideError(radioField[i].parentElement.parentElement, 'valid' + radioField[i].name);
                  hideErrorRadio(focusGroup);
              });
              radioField[i].addEventListener('change' , (event)=>{
                  var changeGroup = document.getElementsByName(radioField[i].name);
                  // setValueForRadioGroup(radioField[i]);
                  if(radioField[i].checked){
                    radioField[i].checked = true;
                    hideError(radioField[i].parentElement.parentElement, 'valid' + radioField[i].name);
                    hideErrorRadio(changeGroup);
                  }
              });
          }

          for(let i = 0 ;i < checkboxField.length; i++ ){
              checkboxField[i].addEventListener('change' , (event)=>{
                  if (checkboxField[i].checked) {
                      checkboxField[i].classList.remove('error');
                      var parentElement = checkboxField[i].parentElement;
                      var children = parentElement.children;
                      if (children.length > 0) {
                          for (let i = 0; i < children.length; i++) {
                              if (children[i].nodeName == "STRONG") {
                                  children[i].remove();
                              }
                          }
                      }
                  }
              });
              checkboxField[i].addEventListener('blur' , (event)=>{
                  if(checkboxField[i].hasAttribute('required')) {
                      if(!checkboxField[i].checked) {
                          checkboxInputValidation(checkboxField[i]);
                      }
                  }
              });
              checkboxField[i].addEventListener('focus', (event) =>{
                  checkboxField[i].classList.remove('error');
                  var parentElement = checkboxField[i].parentElement;
                  var children = parentElement.children;
                  if (children.length > 0) {
                      for (let i = 0; i < children.length; i++) {
                          if (children[i].nodeName == "STRONG") {
                              children[i].remove();
                          }
                      }
                  }
              });
          }

          for(let i= 0 ; i < submitField.length ; i++ ){
            var submitForm = true;
            if (submitField[i].id === 'edit-wizard-prev') {
                var submitForm = false;
            }
            if (submitField[i].id === 'edit-actions-wizard-prev') {
                var submitForm = false;
            }

            if (submitForm) {
              submitField[i].addEventListener('click',(event)=>{
                  submitEventsHit(submitField[i], event, 'no-ajax');
              })
            }
          }

          function submitEventsHit(element, event, type) {
              var textFieldValidation = [];
              var addressFieldValidation= [];
              var emailFieldValidation = [];
              var passwordFieldValidation = [];
              var confirmPasswordFieldValidation = [];
              var selectFieldvalidation = [];
              var textAreaValidation = [];
              var radioInputValidation = [];
              var checkboxValidation = [];
              var formValidity = true;
              var radioGroup = [];
              var postalCodeValidation = [];

              var form;
              // var form = document.getElementById(element.id).form;
              if (type == 'ajax') {
                  form = element;
              }
              else {
                  form = element.form;
              }

              var inputs = document.getElementById(form.id).elements;
              for (let i = 0; i < inputs.length ; i++) {
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text" && inputs[i].name != "newPassword[pass1]") {
                      textFieldValidation.push(checkOnlyRequiredValidation(inputs[i]));
                      if (inputs[i].id == globalAdressFieldId) {
                          addressFieldValidation.push(checkAdressValidation());
                        }
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "email") {
                      // Skip email validation for preference center page.
                      if(!$(form).hasClass('webform-submission-my-preferences-form')) {
                          emailFieldValidation.push(checkEmail(inputs[i]));
                      }
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text" && inputs[i].name === "purchase_date") {
                      emailFieldValidation.push(checkPurchasedate(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text" && inputs[i].name === "product_date_code") {
                      emailFieldValidation.push(checkProductDateCode(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text" && inputs[i].name === "basic_address[postal_code]") {
                    postalCodeValidation.push(checkPostalCode(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].getAttribute('field_type') === 'password' && (inputs[i].name == "signInPassword" || inputs[i].name == "currentPassword" || inputs[i].name == "signInEmailAddress")) {
                      passwordFieldValidation.push(passwordRequiredValidation(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].getAttribute('field_type') === 'password' && inputs[i].name == "newPassword[pass1]") {
                      passwordFieldValidation.push(checkPassword(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].getAttribute('field_type') === 'password' && inputs[i].name == "newPassword[pass2]") {
                      confirmPasswordFieldValidation.push(checkConfirmPassword(inputs[i]));
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "radio") {
                    if(!radioGroup.includes(inputs[i].name)){
                      radioGroup.push(inputs[i].name);
                      radioInputValidation.push(checkRadioGroupValidation(inputs[i], inputs[i].name));
                    }
                  }
                  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "checkbox") {
                      checkboxValidation.push(checkboxInputValidation(inputs[i]));
                  }
                  if (inputs[i].nodeName === "SELECT") {
                     selectFieldvalidation.push(checkOnlyRequiredValidation(inputs[i]));
                  }
                  if (inputs[i].nodeName === "TEXTAREA") {
                      textAreaValidation.push(checkOnlyRequiredValidation(inputs[i]));
                  }
              }
              if(textFieldValidation.length > 0){
                  if(textFieldValidation.includes(false)){
                      formValidity = false
                  }
              }
              if (checkAdressValidation.length > 0){
                  if (checkAdressValidation.includes(false)){
                    formValidity = false;
                  }
                }
              if(emailFieldValidation.length > 0){
                  if(emailFieldValidation.includes(false)){
                      formValidity = false
                  }
              }
              if(passwordFieldValidation.length > 0){
                  if(passwordFieldValidation.includes(false)){
                      formValidity = false
                  }
              }
              if(confirmPasswordFieldValidation.length > 0){
                  if(confirmPasswordFieldValidation.includes(false)){
                      formValidity = false
                  }
              }
              if(selectFieldvalidation.length > 0){
                  if(selectFieldvalidation.includes(false)){
                      formValidity = false
                  }
              }
              if(textAreaValidation.length > 0){
                  if(textAreaValidation.includes(false)){
                      formValidity = false
                  }
              }
              if(radioInputValidation.length > 0){
                  if(radioInputValidation.includes(false)){
                      formValidity = false
                  }
              }
              if(checkboxValidation.length > 0){
                  if(checkboxValidation.includes(false)){
                      formValidity = false
                  }
              }
              if (drupalSettings.sbd_language_switch.default_country == 'US') {
                if(postalCodeValidation.length > 0) {
                    if(postalCodeValidation.includes(false)) {
                        formValidity = false
                    }
                }
              }

              if ($("#webform-submission-user-registration-add-form #edit-optinnewsletters").is(':checked')) {
                   langFormField = $("#webform-submission-user-registration-add-form #edit-language-preference");
                   if (langFormField.prop("tagName") != 'SELECT' && langFormField.is(':visible')) {
                      $("#webform-submission-user-registration-add-form #edit-language-preference").next('.form-item--error-message').remove();
                      var langFromerror = false;
                       langFormField.find('input').each(function() {
                           if ($(this).is(':checked')) {
                              langFromerror = true
                              return false;
                           }
                       });
                       if(!langFromerror){
                          formValidity = false
                          var fieldLabel = $("#webform-submission-user-registration-add-form #edit-language-preference--wrapper .fieldset-legend").text();
                          LangMessageErr = Drupal.t('@label field is required.', {'@label': fieldLabel});
                          var textContent = '<strong class="error form-item--error-message">' + LangMessageErr +  '</strong>';
                          langFormField.after(textContent);
                       }

                   } else {

                   }

              } else {
                  // Do nothing
              }

              if(!formValidity){
                  event.preventDefault();
                  return false;
              }
              else {
                  return true;
              }
          }

            $("input[name*='[address]']").focus(function() {
                // Postal code field.
                postalCodeField = $("input[name*='[postal_code]']");
                hideError(postalCodeField[0], '');
            });

          $('form.webform-submission-delete-account-form input.form-submit').css('border-color', '#c4c4c4');
          $('#edit-delete-account').click(function(e) {
              if($("#edit-delete-account").is(':checked')) {
                  $('form.webform-submission-delete-account-form input.form-submit').removeAttr('disabled');
                  $('form.webform-submission-delete-account-form input.form-submit').removeAttr('style');
              }
              else {
                  $('form.webform-submission-delete-account-form input.form-submit').attr('disabled', 'disabled');
                  $('form.webform-submission-delete-account-form input.form-submit').attr('style', 'background-color: #c4c4c4; border-color: #c4c4c4;');
              }
          });

          $(".webform-submission-my-preferences-add-form").submit(function() {
            $("#edit-mycontent-other-error").remove();
            if($("#edit-mycontent-checkboxes-other-").is(':checked') && $('#edit-mycontent-other').val().trim().length < 1) {
              var error_message = Drupal.t('Message field is required.');
              var error_element = '<strong id="edit-mycontent-other-error" class="error form-item--error-message">' + error_message + '</strong>';
              $("#edit-mycontent-other").addClass('error');
              $(error_element).insertAfter('#edit-mycontent-other');

              return false;
            }
          });

          $('#edit-mycontent-other').blur(function() {
            $('#edit-mycontent-other-error').remove();
            if(($(this).val().length < 1)) {
              var error_message = Drupal.t('Message field is required.');
              var error_element = '<strong id="edit-mycontent-other-error" class="error form-item--error-message">' + error_message + '</strong>';
              $("#edit-mycontent-other").addClass('error');
              $(error_element).insertAfter('#edit-mycontent-other');
            }
          });

          $("#edit-mycontent-checkboxes-other-").click(function() {
            if ($("#edit-mycontent-checkboxes-other-").not(':checked')) {
              $("#edit-mycontent-other").removeClass('error');
              $('#edit-mycontent-other-error').remove();
            }
          });

          $("#edit-place-of-purchase-radios-other-").click(function() {
            if ($("#edit-place-of-purchase-radios-other-").not(':checked')) {
              $("#edit-place-of-purchase-other").removeClass('error');
              $('#edit-place-of-purchase-other').next('.form-item--error-message').remove();
            }
          });

          var newsletterFroms = "#webform-submission-user-registration-add-form .form-item-language-preference, #webform-submission-user-registration-add-form #edit-language-preference--wrapper";

          $(newsletterFroms).hide();
          if ($("#webform-submission-user-registration-add-form #edit-optinnewsletters").is(':checked')) {
              $(newsletterFroms).show();
          } else {
              $(newsletterFroms).hide();
          }

          $("#webform-submission-user-registration-add-form #edit-optinnewsletters").click(function(){
              if ($(this).is(':checked')) {
                  $(newsletterFroms).show();
                  $("#webform-submission-user-registration-add-form #edit-language-preference").attr('required', 'true');
              } else {
                  $(newsletterFroms).hide();
                  $("#webform-submission-user-registration-add-form #edit-language-preference").removeAttr('required');
                  $("#webform-submission-user-registration-add-form #edit-language-preference").removeClass('error');
                  $("#webform-submission-user-registration-add-form #edit-language-preference").next('.form-item--error-message').remove();
              }
          });

          var script = document.createElement('script');
          var google_key = drupalSettings.google_key;
          var currentLanguage = drupalSettings.path.currentLanguage;
          if ($(context).find('.webform-address-validate').length > 0) {
              let autocomplete;
              let address1Field;
              let address2Field;
              let postalField;
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + google_key + '&libraries=places&language=' + currentLanguage + '&callback=initAutocomplete';
              document.head.appendChild(script);

              function initAutocomplete() {
                  var addressFieldString = "#" + $("input[name*='[address]']").attr('id');
                  var address2FieldString = "#" + $("input[name*='[address_2]']").attr('id');
                  var postalCodeFieldString = "#" + $("input[name*='postal_code']").attr('id');
                  address1Field = document.querySelector(addressFieldString);
                  address2Field = document.querySelector(address2FieldString);
                  postalField = document.querySelector(postalCodeFieldString);
                  // Create the autocomplete object, restricting the search predictions to
                  // addresses in the US and Canada.
                  AddAutocomplete = new google.maps.places.Autocomplete(address1Field, {
                  componentRestrictions: { country: ["us", "ca"] },
                  fields: ["address_components", "geometry"],
                  types: ["address"],
                  });
                  //address1Field.focus();
                  // When the user selects an address from the drop-down, populate the
                  // address fields in the form.
                  AddAutocomplete.addListener("place_changed", fillInAddress);
                  address1Field.addEventListener('blur', (event) => {
                    setTimeout(checkAdressValidation, 500);
                  });
              }

              function fillInAddress() {
                  // Get the place details from the autocomplete object.
                  const place = AddAutocomplete.getPlace();
                  let address1 = "";
                  let postcode = "";

                  // Get each component of the address from the place details,
                  // and then fill-in the corresponding field on the form.
                  // place.address_components are google.maps.GeocoderAddressComponent objects
                  // which are documented at http://goo.gle/3l5i5Mr
                  for (const component of place.address_components) {
                      // @ts-ignore remove once typings fixed
                      const componentType = component.types[0];

                      switch (componentType) {
                          case "street_number": {
                          address1 = `${component.long_name} ${address1}`;
                          break;
                          }

                          case "route": {
                          address1 += component.short_name;
                          break;
                          }

                          case "postal_code": {
                          postcode = `${component.long_name}${postcode}`;
                          break;
                          }

                          case "postal_code_suffix": {
                          postcode = `${postcode}-${component.long_name}`;
                          break;
                          }
                          case "locality":
                          var cityFieldString = "#" + $("input[name*='city']").attr('id');
                          document.querySelector(cityFieldString).value = component.long_name;
                          break;
                          case "administrative_area_level_1": {
                          var stateProvinceFieldString = "#" + $("select[name*='state_province']").attr('id');
                          document.querySelector(stateProvinceFieldString).value = component.long_name;
                          break;
                          }
                          case "country":
                          var countryFieldString = "#" + $("select[name*='country']").attr('id');
                          if ($("select[name*='country']").attr('id')) {
                            if (component.long_name == 'Canada') {
                                document.querySelector(countryFieldString).value = 'CA';
                            }
                            else if (component.long_name == 'United States') {
                                document.querySelector(countryFieldString).value = 'US';
                            }
                            else {
                                document.querySelector(countryFieldString).value = '';
                            }
                          }
                          break;
                      }
                  }

                  address1Field.value = address1;
                  postalField.value = postcode;
                  showSuccess(address1Field, 'Valid' + address1Field.name);

                  // After filling the form with address components from the Autocomplete
                  // prediction, set cursor focus on the second address line to encourage
                  // entry of subpremise information such as apartment, unit, or floor number.
                  //address2Field.focus();
              }
              window.initAutocomplete = initAutocomplete;
          }
          function checkAdressValidation(){
              var addressFieldString = "#" + $("input[name*='[address]']").attr('id');
              var address2FieldString = "#" + $("input[name*='[address_2]']").attr('id');
              var postalCodeFieldString = "#" + $("input[name*='postal_code']").attr('id');
              var cityFieldString = "#" + $("input[name*='city']").attr('id');
              var stateProvinceFieldString = "#" + $("select[name*='state_province']").attr('id');
              var countryFieldString = "#" + $("select[name*='country']").attr('id');
              var address1Field = document.querySelector(addressFieldString);
              var address2Field = document.querySelector(address2FieldString);
              var postalField = document.querySelector(postalCodeFieldString);
              var cityField = document.querySelector(cityFieldString);
              var stateField = document.querySelector(stateProvinceFieldString);
              var countryField = document.querySelector(countryFieldString);
              globalAdressFieldId = addressFieldString;
              var fullAddress = '';
              if (address1Field.value !== '') {
                fullAddress = fullAddress + address1Field.value;
                if (address2Field !== null && address2Field.value !== '') {
                  fullAddress = fullAddress + ',' + address2Field.value;
                }
                if (cityField.value !== '') {
                  fullAddress = fullAddress + ',' + cityField.value;
                }
                if (stateField.value !== '') {
                  fullAddress = fullAddress + ',' + stateField.value;
                }
                if (postalField.value !== '') {
                  fullAddress = fullAddress + ',' + postalField.value;
                }
                if ($("select[name*='country']").attr('id') && countryField.value !== '') {
                  fullAddress = fullAddress + ',' + countryField.value;
                }
              } else {
                fullAddress = '';
              }
              return getCordinateteByAddress(fullAddress, address1Field);
            }
            function getCordinateteByAddress(searchText, tField) {
              let valid = true;
              if (searchText != '') {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: searchText }, (results, status) => {
                  if (status === "OK") {
                    showSuccess(tField, 'Valid' + tField.name);
                    valid = true;
                  } else {
                    valid = false;
                    showError(tField, Drupal.t('@label is incorrect address.', { '@label': getFieldLabel(tField) }));
                  }
                });
              }
              return valid;
            }
        }
      };
  })(jQuery, Drupal, drupalSettings);
