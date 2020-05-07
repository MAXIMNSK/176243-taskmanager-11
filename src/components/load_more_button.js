import AbstractionComponent from "./abstraction_component";

const createLoadMoreButton = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMoreButton extends AbstractionComponent {
  getTemplate() {
    return createLoadMoreButton();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
