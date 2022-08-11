import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {initialElements, config} from "./config.js";
export {openPopup, popupImage, titleImage, image}

const profileEditBtn = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup')
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage = document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_form-profile_name');
const jobInput = document.querySelector('.popup__input_form-profile_job');
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const formProfile = document.querySelector('.popup__form_type_profile');
const formPlace = document.querySelector('.popup__form_type_place');
const placeInput = document.querySelector('.popup__input_form-place_name');
const linkInput = document.querySelector('.popup__input_form-place_link');
const elementsList = document.querySelector('.elements__list');
const addButton = document.querySelector('.profile__add-button');
const image = document.querySelector('.popup__photo');
const titleImage = document.querySelector('.popup__subtitle');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeKeyEscape)
}

function getProfileData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profilejob.textContent;
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', closeKeyEscape)
}

function handleSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function generateElement(name, link) {
  const card = new Card(name, link, '#element')
  return card.render();
}

initialElements.forEach(function (item) {
    elementsList.append(generateElement(item.name, item.link))
})


function submitElement(evt) {
    evt.preventDefault();
    elementsList.prepend(generateElement(placeInput.value, linkInput.value));
    closePopup(popupPlace);
}

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
        if (evt.target === evt.currentTarget) {
            closePopup(popup)
        }
    })
})

function closeKeyEscape(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened);
    }
}

profileEditBtn.addEventListener('click', () => {
    formProfileValidition.clearForm();
    openPopup(popupProfile);
    getProfileData();
    openPopup(popupProfile);
});

addButton.addEventListener('click', () => {
    formPlaceValidition.clearForm();
    openPopup(popupPlace);
});

formProfile.addEventListener('submit', handleSubmitProfile);
formPlace.addEventListener('submit', submitElement);

const formProfileValidition = new FormValidator(config, formProfile);
formProfileValidition.enableValidation();

const formPlaceValidition = new FormValidator(config, formPlace);
formPlaceValidition.enableValidation();