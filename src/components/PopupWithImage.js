import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
   constructor({ popupSelector}) {
      super({ popupSelector });
      this._titleImage = this._popup.querySelector('.popup__subtitle');
      this._imageFull = this._popup.querySelector('.popup__photo');
   }
     open = (name, link) => {
        this._titleImage.textContent = name;
        this._imageFull.src = link;
        this._imageFull.alt = name;
        
        super.open();
     }
}