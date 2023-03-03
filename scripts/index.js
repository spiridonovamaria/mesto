const accountEdit = document.querySelector('.account__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEdit = document.querySelector('.popup__close');
const formEdit = document.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup_add');
const buttonCloseAdd = document.querySelector('.popup__close-button-add');
const accountAdd = document.querySelector('.account__add-button');
const formAdd = document.querySelector('.popup__form-add');
const userNameElement = document.querySelector('.account__name');
const userOccupationElement = document.querySelector('.account__profession');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');
const nameCardsInput = document.querySelector('.popup__input_type_title');
const linkCardsInput = document.querySelector('.popup__input_type_link');
const popupPhoto = document.querySelector('.popup_image');
const fullPhoto = document.querySelector('.popup__open-image');
const nameFullPhoto = document.querySelector('.popup__header-image');
const buttonClosePhoto = document.querySelector('.popup__close-image');
const newCard = document.querySelector('#cardTemplate').content;

function closePopup(close) {
  close.classList.remove('popup_opened');
}

function openPopup(open) {
  open.classList.add('popup_opened');
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

accountEdit.addEventListener('click', handleEditAccountClick);
buttonCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});
formEdit.addEventListener('submit', handleEditForm);


const posts = document.querySelector('.posts');

const createCard = (card) => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const postName = newCard.querySelector('.post__name');
  postName.textContent = card.name;
  const postPhoto = newCard.querySelector('.post__photo');
  postPhoto.setAttribute('src', card.link);
  postPhoto.setAttribute('alt', card.name);

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

  postPhoto.addEventListener('click', function () {
    fullPhoto.src = card.link;
    fullPhoto.alt = card.name;
    nameFullPhoto.textContent = card.name;
    openPopup(popupPhoto);
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

const handleAddForm = (element) => {
  element.preventDefault();
  const elementCard = createCard({
    name: nameCardsInput.value,
    link: linkCardsInput.value,
  });
  posts.prepend(elementCard);
  closePopup(popupAdd);
};

accountAdd.addEventListener('click', () => {
  formAdd.reset();
  openPopup(popupAdd);
});

buttonClosePhoto.addEventListener('click', () => {
  closePopup(popupPhoto);
});

buttonCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
formAdd.addEventListener('submit', handleAddForm);




