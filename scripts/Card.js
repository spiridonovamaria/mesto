import { fullPhoto, nameFullPhoto, openPopup, popupPhoto } from "./index.js";

export class Card {
  constructor(data, cardTemplateSelector, /*handleCardClick*/) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
   /* this._handleCardClick = handleCardClick;*/
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector('.post')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPicture = this._element.querySelector('.post__photo');
    this._cardPicture.src = this._link;
    this._element.querySelector('.post__name').textContent = this._name;
    this._cardPicture.alt = this._name;
    this._likeButton = this._element.querySelector('.post__like-button');
    this._deleteButton = this._element.querySelector('.post__delete-button');

    this._setEventListeners();

    return this._element;
  }

  _handleCardLike() {
    this._likeButton.classList.toggle('post__like-button_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _handleCardClick() {
    fullPhoto.src = this._link;
    fullPhoto.alt = this._name;
    nameFullPhoto.textContent = this._name;
    openPopup(popupPhoto);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    })

    this._cardPicture.addEventListener('click', () => {
      this._handleCardClick();
    })
  }
};


