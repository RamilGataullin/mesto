import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor (popupSelector, submitForm) {
        super({popupSelector: popupSelector});
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    } 

    open (card) {
        this._card = card;
        super.open();
    }


    setEventListeners () {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._card);
            this.close();
        });
        super.setEventListeners();
    }

    close () {
        super.close();
    }
}