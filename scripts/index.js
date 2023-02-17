let accountEdit = document.querySelector('.account__edit-button');
let popup = document.querySelector('.popup');
let buttonClose = popup.querySelector('.popup__close');
let formEdit = popup.querySelector('.popup__form');

const userNameElement = document.querySelector('.account__name');
const userOccupationElement = document.querySelector('.account__profession');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');

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
buttonClose.addEventListener('click', handleButtonCloseClick);
formEdit.addEventListener('submit', handleFormEdit);

