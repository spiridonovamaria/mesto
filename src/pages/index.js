import "./index.css";
import Card from "../components/Card.js";
import { initialCards, options } from "../components/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


const buttonOpenEditProfilePopup = document.querySelector('.account__edit-button');
const buttonCloseEdit = document.querySelector('.popup__close');
const formEditProfile = document.querySelector('.popup__form-edit');
const buttonCloseAdd = document.querySelector('.popup__close-button-add');
const buttonOpenAddCardPopup = document.querySelector('.account__add-button');
const formAddCard = document.querySelector('.popup__form-add');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');
const nameCardsInput = document.querySelector('.popup__input_type_title');
const linkCardsInput = document.querySelector('.popup__input_type_link');
export const fullPhoto = document.querySelector('.popup__open-image');
export const nameFullPhoto = document.querySelector('.popup__header-image');
const buttonClosePhoto = document.querySelector('.popup__close-image');
const popupList = document.querySelectorAll('.popup');






const formEditProfileValidator = new FormValidator(options, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(options, formAddCard);
formAddCardValidator.enableValidation();


const userInfo = new UserInfo({ userNameElement: '.account__name', userOccupationElement: '.account__profession' });

const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListeners();

const cardElements = new Section({
  items: initialCards, renderer: (item) => {
    cardElements.addItem(createCard(item));
  }
},
  ".posts")
cardElements.renderItems();;


function createCard(data) {
  const card = new Card(data, '#cardTemplate', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

function handleCardClick(link, name) {
  popupImage.openPopup(link, name);
}

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupEdit.closePopup();
  }
});

buttonOpenEditProfilePopup.addEventListener("click", () => {
  popupEdit.openPopup();
  const { name, job } = userInfo.getUserInfo();
  userNameInput.value = name;
  userOccupationInput.value = job;
  formEditProfileValidator.inactiveButton();

});

popupEdit.setEventListeners();


const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  formSubmit: (data) => {
    cardElements.addItem(createCard(data));
  }

});



buttonOpenAddCardPopup.addEventListener("click", () => {
  formAddCardValidator.inactiveButton();
  formAddCard.reset();
  popupAdd.openPopup();
});

popupAdd.setEventListeners();
