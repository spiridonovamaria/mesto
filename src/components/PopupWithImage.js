import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOpenImage = this._popup.querySelector(".popup__open-image");
    this._popupHeaderImage = this._popup.querySelector(".popup__header-image");
  }

  openPopup(link, name) {
    this._popupOpenImage.src = link;
    this._popupOpenImage.alt = name;
    this._popupHeaderImage.textContent = name;
    super.openPopup();
  }
}
