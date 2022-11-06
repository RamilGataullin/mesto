export default class Card {
    constructor(name, link, templateSelector, likes, _id, userId, owner, handleCardClick, openConfirmform, handleLikeClick){
        this._name = name;
        this._link = link;
        this.cardId = _id;
        this._userId = userId;
        this._ownerId = owner._id;
        this.likes = likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._openConfirmForm = openConfirmform;
    }

    _makeTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        this._cardElement = cardTemplate.querySelector('.element').cloneNode(true);
        this._photo = this._cardElement.querySelector('.element__photo');
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._deleteButtton = this._cardElement.querySelector('.element__delete');
        this._likeButton = this._cardElement.querySelector('.element__like');
        this._likeCounter = this._cardElement.querySelector('.element__counter')
        this._photo.src = this._link;
        this._photo.alt = this._name;

        if (this._ownerId != this._userId) {
            this._deleteButtton.remove();
        }
        this._setLikeState();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeClick(this));
        this._deleteButtton.addEventListener('click', () => this._openConfirmForm(this));
        this._photo.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    hasLiked() {
        return this.likes.some((like) => like._id === this._userId);
    }

    _setLikeState() {
        this._likeCounter.textContent = this.likes.length;
        if (this.hasLiked()) {
            this._likeButton.classList.add('element__like_active')
        } else {
            this._likeButton.classList.remove('element__like_active');
      }
    }

    toggleLikeState() {
        this._setLikeState()
    }


    deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    render() {
        this._makeTemplate();
        this._setEventListeners();
        return this._cardElement;
      }   
};

