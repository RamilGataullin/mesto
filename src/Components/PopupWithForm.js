import Popup from "./Popup";

export default class PopupWithForm extends Popup{
    constructor (popupSelector, submitForm) {
        super({popupSelector: popupSelector});
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    }

    _getInputValues () {
        const inputValue = {};
        this._inputList.forEach((field) => {
            inputValue[field.name] = field.value;
        });
        return inputValue;
    }

 
    setInputValues(data) {
        this._inputList.forEach((input) => {
          input.value = data[input.name];
        });
      }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._submitForm(this._getInputValues());
            this.close();
        });
    }

    close () {
        super.close();
        this._form.reset();
    }
}