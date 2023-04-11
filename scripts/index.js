import { Card } from "./Card.js";
import { initialCards, options } from "./constants.js";
import { FormValidator} from "./FormValidator.js";


const buttonOpenEditProfilePopup = document.querySelector('.account__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEdit = document.querySelector('.popup__close');
const formEditProfile = document.querySelector('.popup__form-edit');
const popupAdd = document.querySelector('.popup_add');
const buttonCloseAdd = document.querySelector('.popup__close-button-add');
const buttonOpenAddCardPopup = document.querySelector('.account__add-button');
const formAddCard = document.querySelector('.popup__form-add');
const userNameElement = document.querySelector('.account__name');
const userOccupationElement = document.querySelector('.account__profession');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');
const nameCardsInput = document.querySelector('.popup__input_type_title');
const linkCardsInput = document.querySelector('.popup__input_type_link');
export const popupPhoto = document.querySelector('.popup_image');
export const fullPhoto = document.querySelector('.popup__open-image');
export const nameFullPhoto = document.querySelector('.popup__header-image');
const buttonClosePhoto = document.querySelector('.popup__close-image');
const popupList = document.querySelectorAll('.popup');




function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);

}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);

}

const handleEditAccountClick = () => {

  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent
  openPopup(popupEdit);
}
const handleEditForm = (evt) => {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup(popupEdit);
}

buttonOpenEditProfilePopup.addEventListener('click', handleEditAccountClick);
buttonCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});
formEditProfile.addEventListener('submit', handleEditForm);

const posts = document.querySelector('.posts');


function renderCard(data) {
  const card = new Card(data, '#cardTemplate');
  const cardElement = card.generateCard();

  return cardElement;
}

initialCards.forEach((data) => {
  posts.prepend(renderCard(data));
});


const handleAddForm = (evt) => {
  evt.preventDefault();
  const newCardObject = {};
  newCardObject.name = nameCardsInput.value;
  newCardObject.link = linkCardsInput.value;
  posts.prepend(renderCard(newCardObject));
  closePopup(popupAdd);
}


buttonOpenAddCardPopup.addEventListener('click', () => {
  formAddCardValidator.inactiveButton();
  formAddCard.reset();
  openPopup(popupAdd);

});


buttonClosePhoto.addEventListener('click', () => {
  closePopup(popupPhoto);
});

buttonCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
formAddCard.addEventListener('submit', handleAddForm);

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }

}

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    };
  });
});


const formEditProfileValidator = new FormValidator(options, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(options, formAddCard);
formAddCardValidator.enableValidation();
