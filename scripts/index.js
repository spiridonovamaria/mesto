let editAccount = document.querySelector('.account__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let saveButton = popup.querySelector('.popup__save');



const handleEditAccountClick = () => {
    popup.classList.add('popup_active');
}

const handleCloseButtonClick = () => {
    popup.classList.remove('popup_active');
}

editAccount.addEventListener('click', handleEditAccountClick);
closeButton.addEventListener('click', handleCloseButtonClick);

const userName = 'Жак-Ив Кусто';
const userOccupation = 'Исследователь океана';

const userNameElement = document.querySelector('#user-name');
userNameElement.textContent = userName;

const userOccupationElement = document.querySelector('#user-occupation');
userOccupationElement.textContent = userOccupation;

const userNameInput = document.querySelector('#user-name-input');
userNameInput.value = userName


const userOccupationInput = document.querySelector('#user-occupation-input');
userOccupationInput.value = userOccupation;



const handleSaveButton = (evt) => {
    evt.preventDefault();
    userNameElement.textContent = userNameInput.value;
    userOccupationElement.textContent = userOccupationInput.value;
    handleCloseButtonClick();
}

saveButton.addEventListener('click', handleSaveButton);