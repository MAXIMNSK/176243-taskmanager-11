import {getMarkup} from "./filter/element";
import AbstractComponent from "./abstraction_component";

export const createFilter = () => {
  return (
    `<section class="main__filter filter container">
      ${getMarkup()}
    </section>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilter(this._filters);
  }
}
