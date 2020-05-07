import AbstractionComponent from "./abstraction_component";

const getTasksList = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class BoardTasksList extends AbstractionComponent {
  getTemplate() {
    return getTasksList();
  }
}
