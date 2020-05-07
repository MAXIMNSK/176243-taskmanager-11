import {getMarkup} from "./filter/element";
import AbstractionComponent from "./abstraction_component";

export const createFilter = () => {
  return (
    `<section class="main__filter filter container">
      ${getMarkup()}
    </section>`
  );
};

export default class Filter extends AbstractionComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilter(this._filters);
  }
}
