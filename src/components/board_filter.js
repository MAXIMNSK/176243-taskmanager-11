import AbstractionComponent from "./abstraction_component";
import {SORT_TYPE} from "../consts/constants";

const boardFilterList = () => {
  return (
    `<div class="board__filter-list">
      <a href="#" data-sort-type=${SORT_TYPE.DEFAULT} class="board__filter">SORT BY DEFAULT</a>
      <a href="#" data-sort-type=${SORT_TYPE.DATE_UP} class="board__filter">SORT BY DATE up</a>
      <a href="#" data-sort-type=${SORT_TYPE.DATE_DOWN} class="board__filter">SORT BY DATE down</a>
    </div>`
  );
};

export default class BoardFiltersList extends AbstractionComponent {
  constructor() {
    super();

    this._currentSortType = SORT_TYPE.DEFAULT;
  }

  getTemplate() {
    return boardFilterList();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const sortType = evt.target.dataset.sortType;

      if (evt.target.tagName !== `A` || this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;
      handler(this._currentSortType);
    });
  }
}
