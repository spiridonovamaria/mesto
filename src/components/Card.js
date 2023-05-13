export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteCard, handleLikeScore, idUser }, cardTemplateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner._id;
    this._idUser = idUser;

    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeScore = handleLikeScore;
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
    this._likeScore = this._element.querySelector('.post__like-score');


    this._changeLikeState();

    if (this._owner !== this._idUser) {
      this._deleteButton.remove();
    }

    this._setEventListeners();
    return this._element;
  }


  removeCard() {
    this._element.remove();
    this._element = null;
  }


  getId() {
    return this._id;
  }

  _checkLike() {
    return this._likes.some(like => like._id === this._idUser);
  }
  _changeLikeState = () => {
    this._likeScore.textContent = this._likes.length;
    if (this._checkLike()) {
      this.likeOn();
    } else {
      this.likeOff();
    }
  }

  likeOn() {
    this._likeButton.classList.add('post__like-button_active');
    this.isLiked = true;
  }
  likeOff() {
    this._likeButton.classList.remove('post__like-button_active');
    this.isLiked = false;
  }

  setLikesCount(data) {
    this._likes = data.likes;
    this._changeLikeState();
  }


  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeScore();
    })
      ;

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._cardPicture.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
  }
};

