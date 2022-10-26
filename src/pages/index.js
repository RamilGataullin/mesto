import './index.css';
import Card from "../Components/Card.js";
import Section from "../Components/Section.js";
import FormValidator from "../Components/FormValidator.js";
import PopupWithImage from '../Components/PopupWithImage.js';
import PopupWithForm from '../Components/PopupWithForm.js';
import UserInfo from '../Components/UserInfo.js';

import {initialElements,
        config, 
        profileEditBtn, 
        nameInput, 
        jobInput, 
        formProfile, 
        formPlace, 
        placeInput, 
        linkInput, 
        popupProfileAddButton, 
        selectors
} from "../utils/config.js";

 

const cardSection = new Section({
   items: initialElements,
   renderer: (item) => {
     cardSection.addItem(generateElement(item))
   }
},
selectors.elementsList);

cardSection.renderItems();

const popupWithImage = new PopupWithImage({
    popupSelector: selectors.popupImage
});
popupWithImage.setEventListeners();

const cardFrom = new PopupWithForm(selectors.popupPlace, handleCardFormSubmit);
cardFrom.setEventListeners();

const userInfo = new UserInfo({
     nameSelector: selectors.profileName,
     aboutSelector: selectors.profilejob
});

const profileForm = new PopupWithForm(selectors.popupProfile, (evt) => {
    //evt.preventDefault();
    const inputs = {
    name: nameInput.value,
    about: jobInput.value
  }
  userInfo.setUserInfo(inputs)
});
profileForm.setEventListeners();

function generateElement(item) {
  const card = new Card(item.name, item.link, '#element', handleCardClick)
    return card.render();
}

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}


function handleCardFormSubmit() {
    cardSection.addItem(generateElement({name: placeInput.value, link: linkInput.value}));
}


profileEditBtn.addEventListener('click', () => {
    formProfileValidition.clearForm();
    const userInfoValue = userInfo.getUserInfo();
    nameInput.value = userInfoValue.name;
    jobInput.value = userInfoValue.about;
    profileForm.open();
});

popupProfileAddButton.addEventListener('click', () => {
    formPlaceValidition.clearForm();
    cardFrom.open();
});

const formProfileValidition = new FormValidator(config, formProfile);
formProfileValidition.enableValidation();

const formPlaceValidition = new FormValidator(config, formPlace);
formPlaceValidition.enableValidation();