let accountEdit = document.querySelector('.account__edit-button');
let popupEdit = document.querySelector('.popup__edit');
let buttonCloseEdit = document.querySelector('.popup__close');
let formEdit = document.querySelector('.popup__form');
let popupAdd = document.querySelector('.popup__add');
let buttonCloseAdd = document.querySelector('.popup__close-button-add');
let accountAdd = document.querySelector('.account__add-button');
let formAdd = document.querySelector('.popup__form-add');


const userNameElement = document.querySelector('.account__name');
const userOccupationElement = document.querySelector('.account__profession');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');
const nameCardsInput = document.querySelector('.popup__input_type_title');
const linkCardsInput = document.querySelector('.popup__input_type_link');

const popupPhoto = document.querySelector('.popup__photo');
const FullPhoto = document.querySelector('.popup__open-photo');
const nameFullPhoto = document.querySelector('.popup__header-photo');
const popup = document.querySelector('.popup');




const handleAccountEditClick = () => {

  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent
  popupEdit.classList.add('popup_opened');
}



const handleFormEdit = (evt) => {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup(popupEdit);
}

accountEdit.addEventListener('click', handleAccountEditClick);
buttonCloseEdit.addEventListener('click',() =>  {
  closePopup(popupEdit);
});
formEdit.addEventListener('submit', handleFormEdit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const posts = document.querySelector('.posts');

const createCard = (card) => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const postName = newCard.querySelector('.post__name');
  postName.textContent = card.name;
  const postPhoto = newCard.querySelector('.post__photo');
  postPhoto.setAttribute('src', card.link);

  const likeElement = newCard.querySelectorAll(".post__like-button");
  likeElement.forEach(like => {
    like.addEventListener('click', () => {
      like.classList.toggle('post__like-button_active')
    })
  });
  const post = newCard.querySelector('.post');
  const buttonDelete = newCard.querySelector('.post__delete-button');
  buttonDelete.addEventListener('click', () => {
    post.remove();
  });


  postPhoto.addEventListener('click', function() {
  FullPhoto.src = card.link;
  nameFullPhoto.textContent = card.name;
  handlePopupPhotoClick();
});



  return newCard;
}


const showCard = (card) => {
  posts.prepend(createCard(card));
};

initialCards.forEach((card) => {
  showCard(card);
});


initialCards.forEach(createCard);


const handleAccountAddClick = () => {
  popupAdd.classList.add('popup_opened');
}



const handleFormAdd = (element) => {
  element.preventDefault();
  const elementCard = createCard({
    name: nameCardsInput.value,
    link: linkCardsInput.value,
  });
  posts.prepend(elementCard);
  closePopup(popupAdd);
};


const buttonClosePhoto = document.querySelector('.popup__close-button-photo');

const handlePopupPhotoClick = () => {
  popupPhoto.classList.add('popup_opened');
}

function closePopup(close) {
  close.classList.remove('popup_opened');
}

buttonClosePhoto.addEventListener('click' , () =>  {
  closePopup(popupPhoto);
});
popupPhoto.addEventListener('click' , handlePopupPhotoClick);


accountAdd.addEventListener('click', handleAccountAddClick);
buttonCloseAdd.addEventListener('click', () =>  {
  closePopup(popupAdd);
});
formAdd.addEventListener('submit', handleFormAdd);




