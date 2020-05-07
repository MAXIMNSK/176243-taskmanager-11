import AbstractionComponent from "./abstraction_component";

const createBoard = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board extends AbstractionComponent {
  getTemplate() {
    return createBoard();
  }
}
