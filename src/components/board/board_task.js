import {createElement} from "../../utility/utility";

const getTasksList = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class BoardTasksList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getTasksList();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
