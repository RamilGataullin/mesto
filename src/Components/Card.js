export default class Card {
    constructor(name, link, templateSelector, handleCardClick){
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _makeTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        this._cardElement = cardTemplate.querySelector('.element').cloneNode(true);
        this._photo = this._cardElement.querySelector('.element__photo');
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._deleteButtton = this._cardElement.querySelector('.element__delete');
        this._likeButton = this._cardElement.querySelector('.element__like');
        this._photo.src = this._link;
        this._photo.alt = this._name;
      }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeClick());
        this._deleteButtton.addEventListener('click', () => this._handleDeleteClick());
        this._photo.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    _handleLikeClick() {
        this._likeButton.classList.toggle('element__like_active');
    }

    _handleDeleteClick() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    render() {
        this._makeTemplate();
        this._setEventListeners();
        return this._cardElement;
      }   
};

