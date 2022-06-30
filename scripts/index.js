const profileEditBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage =document.querySelector('.popup_type_image');
const popupCloseProfile = popupProfile.querySelector('.popup__close');
const popupClosePlace = popupPlace.querySelector('.popup__close');
const popupCloseImage = popupImage.querySelector('.popup__close');
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


function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function getProfileData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profilejob.textContent;
}

function closePopup (popup) {
    popup.classList.remove('popup_opened')
}

function hadleSubmitProfile (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function generateElement (name, link) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const photo = element.querySelector('.element__photo');
    const title = element.querySelector('.element__title');
    const deleteButton = element.querySelector('.element__delete');
    const likeButton = element.querySelector('.element__like');
    photo.src = link;
    title.textContent = name;

    deleteButton.addEventListener('click', function() {
        element.remove();
    })

    likeButton.addEventListener('click', function(evt) {
        likeButton.classList.toggle('element__like_active');
    })

    photo.addEventListener('click', () => {
        hadlePopupImage(name, link);
    })

    return element;
}

initialElements.forEach(function(item){
    elementsList.append(generateElement(item.name, item.link))
})

function hadlePopupImage (name, link) {
    image.src = link;
    image.alt = name
    titleImage.textContent = name;
    openPopup(popupImage);
}

function submitElement (evt) {
    evt.preventDefault();
    elementsList.prepend(generateElement(placeInput.value, linkInput.value));
    closePopup(popupPlace);
}

profileEditBtn.addEventListener('click', () => {
    openPopup(popupProfile), getProfileData();
});

addButton.addEventListener('click', ()=> {
    openPopup(popupPlace);
});

popupCloseProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});

popupClosePlace.addEventListener('click', () => {
    closePopup(popupPlace);
});

popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage);
});

formProfile.addEventListener('submit', hadleSubmitProfile);
formPlace.addEventListener('submit', submitElement);

