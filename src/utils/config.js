const profileEditBtn = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_form-profile_name');
const jobInput = document.querySelector('.popup__input_form-profile_job');
const formProfile = document.querySelector('.popup__form_type_profile');
const formPlace = document.querySelector('.popup__form_type_place');
const placeInput = document.querySelector('.popup__input_form-place_name');
const linkInput = document.querySelector('.popup__input_form-place_link');
const popupProfileAddButton = document.querySelector('.profile__add-button');


const selectors = {
    elementsList: '.elements__list',
    popupImage: '.popup_type_image',
    popupPlace: '.popup_type_place',
    popupProfile: '.popup_type_profile',
    profileName: '.profile__name',
    profilejob: '.profile__job'
};


const initialElements = [

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
    },

];

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
}

export {initialElements, config, profileEditBtn, nameInput, jobInput, formProfile, formPlace, placeInput, linkInput, popupProfileAddButton, selectors }