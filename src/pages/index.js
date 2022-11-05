import './index.css';
import Card from "../Components/Card.js";
import Section from "../Components/Section.js";
import FormValidator from "../Components/FormValidator.js";
import PopupWithImage from '../Components/PopupWithImage.js';
import PopupWithForm from '../Components/PopupWithForm.js';
import UserInfo from '../Components/UserInfo.js';
import Api from '../Components/Api.js';

import {
        config, 
        profileEditBtn, 
        formProfile, 
        formPlace,
        formAvatar, 
        popupProfileAddButton,
        profileAvatarBtn, 
        selectors
} from "../utils/config.js";
import PopupWithConfirmation from '../Components/PopupWithConfirmation';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: 'dba18023-f348-4b5d-a0c6-4cd4201710a6',
    'Content-Type': 'application/json'
  }
}); 

Promise.all([api.getUserData(), api.getCardsData()])
  .then((res) => {
    const [userData, cardsData] = res;
    userInfo.setUserInfo(userData);
    cardSection.render(cardsData);
  })
  .catch((err) => {
    console.log(err)
  })
 
const cardSection = new Section({
   renderer: (item) => {
     cardSection.addItemAppend(generateElement(item))
   }
},
selectors.elementsList);

const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  aboutSelector: selectors.profilejob,
  avatarSelector: selectors.profileAvatar
});

const popupWithImage = new PopupWithImage({
    popupSelector: selectors.popupImage,
});
popupWithImage.setEventListeners();

const cardFrom = new PopupWithForm(selectors.popupPlace, handleCardFormSubmit);
cardFrom.setEventListeners();

const profileForm = new PopupWithForm(selectors.popupProfile, handleProfileFormSubmit);
profileForm.setEventListeners();

const avatarForm = new PopupWithForm(selectors.popupAvatar, handleAvatarFormSubmit);
avatarForm.setEventListeners();

const confirmForm = new PopupWithConfirmation(selectors.popupDelete, handleCardDelete);
confirmForm.setEventListeners();


function generateElement(item) {
  const card = new Card(item.name, item.link, '#element', item.likes, item._id, userInfo.getId(), item.owner, handleCardClick, openConfirmForm, handleLikeClick)
    return card.render();
}

function handleProfileFormSubmit(inputs) {
  profileForm.onLoading();
  api.setUserProfile(inputs.name, inputs.about)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      profileForm.offLoading(true)
    })
}

function handleAvatarFormSubmit(inputs) {
  avatarForm.onLoading();
  api.setUserAvatar(inputs.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      avatarForm.offLoading(true);
    })
}



function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}


function handleCardFormSubmit(inputs) {
    cardFrom.onLoading();
    api.setCard(inputs.name, inputs.link)
    .then((res) => {
      cardSection.addItem(generateElement(res));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardFrom.offLoading(true)
    })
}

function openConfirmForm(card) {
  confirmForm.open(card)
}

function handleCardDelete(card) {
  api.deleteCard(card.cardId)
    .then(() => {
      card.deleteCard();
    })
    .catch((err) => {
      console.log(err);
    })
}

function handleLikeClick(card) {
  if (card.hasLiked()) {
    api.removeLike(card.cardId)
    .then((res) => {
      card.likes = res.likes;
      card.removeLike(res.likes);
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    api.addLike(card.cardId)
    .then((res) => {
      card.likes = res.likes;
      card.addLike(res.likes);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

profileEditBtn.addEventListener('click', () => {
    formProfileValidation.clearForm();  
    const userInfoValue = userInfo.getUserInfo();
    profileForm.setInputValues(userInfoValue)
    profileForm.open();
});

popupProfileAddButton.addEventListener('click', () => {
    formPlaceValidation.clearForm();
    cardFrom.open();
});

profileAvatarBtn.addEventListener('click', () => {
    formAvatarValidation.clearForm();
    avatarForm.open();
})

const formAvatarValidation = new FormValidator(config, formAvatar);
formAvatarValidation.enableValidation();

const formProfileValidation = new FormValidator(config, formProfile);
formProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(config, formPlace);
formPlaceValidation.enableValidation();