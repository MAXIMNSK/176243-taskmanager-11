import AbstractComponent from "./abstraction_component";
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

export default class BoardFiltersList extends AbstractComponent {
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

  setSortTypeChangeHandler(callbackHandler) {
    this.getElement().addEventListener(`click`, this._sortChanger.bind(this, callbackHandler));
  }

  _sortChanger(callbackHandler, evt) {
    evt.preventDefault();
    const sortType = evt.target.dataset.sortType;

    if (evt.target.tagName !== `A` || this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    callbackHandler(this._currentSortType);
  }
}
