export default class FormValidator {
    constructor(config, formElement){
       this._formSelector = config.formSelector;
       this._inputSelector = config.inputSelector;
       this._submitButtonSelector = config.submitButtonSelector;
       this._inputErrorClass = config.inputErrorClass;
       this._formElement = formElement;
       this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
       this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = ' ';
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hazInvalidInput() {
        return this._inputList.some(inputElement => !inputElement.validity.valid)
    }

    _toggleButtonState() {
        if (this._hazInvalidInput()) {
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.disabled = false;
        }
    }


    enableValidation() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
        this._toggleButtonState();
    }

    clearForm(ifButtonElementEnabled) {
        if (ifButtonElementEnabled === undefined) {
            ifButtonElementEnabled = false;
        }
        this._formElement.reset();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
        this._buttonElement.disabled = !ifButtonElementEnabled;
    }
}