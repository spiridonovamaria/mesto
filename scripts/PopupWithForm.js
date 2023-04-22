import Popup  from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');

  }

  _getInputValues() {
    this._inputs = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputs.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setEventListeners() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());

      this.closePopup();
    });


    super.setEventListeners();
  }


  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}

