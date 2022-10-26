import Popup from "./Popup.js";
import { selectors } from "../utils/config.js";

export default class PopupWithImage extends Popup {
     open = (name, link) => {
        this._popup.querySelector(selectors.titleImage).textContent = name;
        this._popup.querySelector(selectors.imageFull).src = link;
        this._popup.querySelector(selectors.imageFull).alt = name;
        
        super.open();
     }
}