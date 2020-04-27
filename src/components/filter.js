import {getMarkup} from "./filter/element";
import {createElement} from "../utility/utility";

export const createFilter = () => {
  return (
    `<section class="main__filter filter container">
      ${getMarkup()}
    </section>`
  );
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilter(this._filters);
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
