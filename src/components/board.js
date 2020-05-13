import AbstractComponent from "./abstraction_component";

const createBoard = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoard();
  }
}
