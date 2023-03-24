const hiddenError = (errorElement, inputErrorClass, inputElement, inputBorderError) => {
  errorElement.textContent = '';
  errorElement.classList.remove(inputErrorClass);
  inputElement.classList.remove(inputBorderError);

};

const showError = (errorElement, message, inputErrorClass, inputElement, inputBorderError) => {
  errorElement.textContent = message;
  errorElement.classList.add(inputErrorClass);
  inputElement.classList.add(inputBorderError);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
  if (isValid) {
    hiddenError(errorElement, options.inputErrorClass, inputElement, options.inputBorderError);
  }
  else {
    showError(errorElement, inputElement.validationMessage, options.inputErrorClass, inputElement, options.inputBorderError);
  }
};

const enableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.classList.remove(disabledButtonClass);
  buttonElement.disabled = '';

};

const disableButton = (buttonElement, disabledButtonClass) => {
  buttonElement.classList.add(disabledButtonClass);
  buttonElement.disabled = 'true';

};

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
  const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

  if (formIsValid) {
    enableButton(submitElement, disabledButtonClass);
  } else {
    disableButton(submitElement, disabledButtonClass);
  }
};



const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {

      toggleInputState(inputElement, options);

      toggleButtonState(inputs, submitElement, options.disabledButtonClass, inputElement);
    });
  });
};





const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form => {
    setEventListeners(form, options);
  })
};

const options = {
  formSelector: '.popup__form',
  submitSelector: '.popup__save',
  inputSelector: '.popup__input',
  inputSectionSelector: '.popup__form-section',
  inputErrorSelector: '.popup__input-error',
  disabledButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input-error_active',
  inputBorderError: 'popup__input_invalid',

};

enableValidation(options);












