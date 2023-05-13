import "./index.css";
import Card from "../components/Card.js";
import { /*initialCards,*/ options } from "../components/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import Api from "../components/Api.js";


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
const formUpdateAvatar = document.querySelector('.popup__form-avatar');
const formConfirm = document.querySelector('.popup_confirm');
const buttonChangeAvatar = document.querySelector('.account__avatar-button');


const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-65/",
  headers: {
    authorization: "f60634d5-63da-4429-b79c-be8f0298c760",
    "Content-Type": "application/json"
  }
})







Promise.all([api.getInfoUser(), api.getInitialCards()])
  .then(([data, newCards]) => {
    userInfo.setUserInfo(data);
    cardElements.renderItems(newCards);
  })

  .catch((err) => console.log(err));

const formEditProfileValidator = new FormValidator(options, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(options, formAddCard);
formAddCardValidator.enableValidation();

const formUpdateAvatarValidator = new FormValidator(options, formUpdateAvatar);
formUpdateAvatarValidator.enableValidation();



const userInfo = new UserInfo({ userNameElement: '.account__name', userOccupationElement: '.account__profession', userAvatarElement: '.account__photo' });

const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListeners();

const cardElements = new Section({
  renderer: (item) => {
    cardElements.addItem(createCard(item));
  }

},
  ".posts")



function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: (link, name) => {
      popupImage.openPopup(link, name)
    },
    handleDeleteCard: () => {
      popupConfirm.openPopup()

      popupConfirm.handleConfirm(() => {
          api.deleteCard(card.getId())
              .then(() => {
                  card.removeCard()
                  popupConfirm.closePopup()
              })
              .catch((err) => console.log(err))
      })
  },
    handleLikeScore: () => {

        if (card.isLiked){
        api
          .deleteLike(card.getId())
          .then(likes => {
            card.setLikesCount(likes);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .addLike(card.getId())
          .then(likes => {
            card.setLikesCount(likes);
          })
          .catch((err) => console.log(err));
      }
    },
    idUser: userInfo.getUserId()
  }, '#cardTemplate')
  const cardElement = card.generateCard();

  return cardElement;
}



const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  formSubmit: (data) => {
    popupEdit.renderSave(true);
    api.editInfoUser(data)
        .then((res) => {
            userInfo.setUserInfo(res);
            popupEdit.closePopup();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          popupEdit.renderSave(false);

        });
    }
});

buttonOpenEditProfilePopup.addEventListener("click", () => {
  popupEdit.openPopup();
  const { name, about } = userInfo.getUserInfo();
  userNameInput.value = name;
  userOccupationInput.value = about;
  formEditProfileValidator.inactiveButton();

});

popupEdit.setEventListeners();


const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  formSubmit: (data) => {
    popupAdd.renderSave(true);
    api.addCard(data)
        .then((res) => {
          cardElements.addItem(createCard(res));
          popupAdd.closePopup();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          popupAdd.renderSave(false);

        });
    }

});



buttonOpenAddCardPopup.addEventListener("click", () => {
  formAddCardValidator.inactiveButton();
  formAddCard.reset();
  popupAdd.openPopup();
});

popupAdd.setEventListeners();


const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_update-avatar',
  formSubmit: (data) => {
    popupAvatar.renderSave(true)
    api.editAvatarUser(data)
      .then((res) => {
        userInfo.setUserInfo(res);


      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAvatar.renderSave(false);
        popupAvatar.closePopup();
      });
  }
})

buttonChangeAvatar.addEventListener("click", () => {
  popupAvatar.openPopup();
});


popupAvatar.setEventListeners();

const popupConfirm = new PopupWithConfirm('.popup_confirm');
popupConfirm.setEventListeners();

