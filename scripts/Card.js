export default class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
   this._handleCardClick = handleCardClick;
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
    this._cardTitle = this._element.querySelector('.post__name');
    this._cardTitle.textContent = this._name;
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
  _openPopupImage() {
    this._handleCardClick(this._link, this._name);
  }
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    })

    this._cardPicture.addEventListener('click', () => {
      this._openPopupImage();
    })
  }
};


