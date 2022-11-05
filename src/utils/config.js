const profileEditBtn = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_profile');
const formPlace = document.querySelector('.popup__form_type_place');
const formAvatar = document.querySelector('.popup__form_type_avatar')
const popupProfileAddButton = document.querySelector('.profile__add-button');

const profileAvatarBtn = document.querySelector('.profile__avatar-button');


const selectors = {
    elementsList: '.elements__list',
    popupImage: '.popup_type_image',
    popupPlace: '.popup_type_place',
    popupProfile: '.popup_type_profile',
    profileName: '.profile__name',
    profilejob: '.profile__job',
    popupAvatar: '.popup_type_avatar',
    profileAvatar: '.profile__avatar',
    popupDelete: '.popup_type_delete'
};

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
}

export {config, profileEditBtn, formProfile, formPlace, formAvatar, popupProfileAddButton, profileAvatarBtn, selectors }