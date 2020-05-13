import MenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import {TaskCount, Position} from "./consts/constants";
import {getTaskData} from "./components/task/mock";
import {render} from "./utility/render";
import BoardComponent from "./components/board";
import BoardController from "./controllers/board";

const siteMainBlock = document.querySelector(`.main`);
const siteMainHeaderBlock = siteMainBlock.querySelector(`.main__control`);

const tasksData = getTaskData(TaskCount.max);

const init = () => {
  const menuComponent = new MenuComponent();
  const filterComponent = new FilterComponent();
  const boardComponent = new BoardComponent();
  const boardController = new BoardController(boardComponent);

  render(siteMainHeaderBlock, menuComponent, Position.beforeend);
  render(siteMainBlock, filterComponent, Position.beforeend);
  boardController.render(tasksData);
};

init();
