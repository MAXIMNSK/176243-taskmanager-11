import AbstractComponent from "./abstraction_component";

const getTasksList = () => `<div class="board__tasks"></div>`;

export default class BoardTasksList extends AbstractComponent {
  getTemplate() {
    return getTasksList();
  }
}
