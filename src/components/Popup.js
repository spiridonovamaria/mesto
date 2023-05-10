export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__close');

  }
  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEscape);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupEscape);

  }

  _closePopupEscape = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }


  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      this.closePopup();
    });

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.closePopup(evt.target);
      };
    });
  }
}


