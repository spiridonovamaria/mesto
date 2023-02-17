let accountEdit = document.querySelector('.account__edit-button');
let popup = document.querySelector('.popup');
let ButtonClose = popup.querySelector('.popup__close');
let formEdit = popup.querySelector('.popup__form');

const userNameElement = document.querySelector('#user-name');
const userOccupationElement = document.querySelector('#user-occupation');
const userNameInput = document.querySelector('#user-name-input');
const userOccupationInput = document.querySelector('#user-occupation-input');

const handleAccountEditClick = () => {

  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent
  popup.classList.add('popup_opened');
}

const handleButtonCloseClick = () => {
  popup.classList.remove('popup_opened');
}

const handleFormEdit = (evt) => {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  handleButtonCloseClick();
}

accountEdit.addEventListener('click', handleAccountEditClick);
ButtonClose.addEventListener('click', handleButtonCloseClick);
formEdit.addEventListener('submit', handleFormEdit);

