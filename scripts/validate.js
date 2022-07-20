const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
}

const { formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass } = config

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = ' '
}

const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement);
    }
}

const hazInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hazInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(buttonElement, inputList);
        })
    })

    toggleButtonState(buttonElement, inputList);
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement);
    })
};


function validateForm(formParentElement, { inputSelector }) {
    const inputList = Array.from(formParentElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        inputElement.dispatchEvent(event);
    })
}

function clearForm(formParentElement, { formSelector, inputSelector, submitButtonSelector}) {
    const formElement = formParentElement.querySelector(formSelector);
    formElement.reset();

    const inputList = Array.from(formParentElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement);
    })

    const buttonElement = formElement.querySelector(submitButtonSelector);
    buttonElement.disabled = true;
}
