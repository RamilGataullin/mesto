const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type-name');
const jobInput = document.querySelector('.popup__input_type-job');
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const popupForm = document.querySelector('.popup__form');

function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profilejob.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened')
}

function hadleSubmitProfile (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', hadleSubmitProfile);
