export class FormValidator {
  constructor(options, formElement) {
    this._formElement = formElement;
    this._submitSelector = options.submitSelector;
    this._inputSelector = options.inputSelector;
    this._disabledButtonClass = options.disabledButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._inputBorderError = options.inputBorderError;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitSelector);
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputBorderError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  }


  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputBorderError);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }


  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }


  _enableButton() {
    this._buttonElement.classList.remove(this._disabledButtonClass);
    this._buttonElement.removeAttribute("disabled", false);
  }

  _disableButton() {
    this._buttonElement.classList.add(this._disabledButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }


  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputs.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }


  enableValidation() {
    this._setEventListeners();
  }
}




export const options = {
  formSelector: '.popup__form',
  submitSelector: '.popup__save',
  inputSelector: '.popup__input',
  inputSectionSelector: '.popup__form-section',
  inputErrorSelector: '.popup__input-error',
  disabledButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input-error_active',
  inputBorderError: 'popup__input_invalid',
};

