import MenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import BoardComponent from "./components/board";
import BoardFilterComponent from "./components/board/board_filter";
import BoardTaskComponent from "./components/board/board_task";
import TaskComponent from "./components/task";
import TaskEditorComponent from "./components/task_editor";
import LoadMoreButtonComponent from "./components/load_more_button";
import {TaskCount, Position} from "./consts/constants";
import {getTaskData} from "./components/task/mock";
import {render} from "./utility/utility";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasksData = getTaskData(TaskCount.max);
let currentTasksCount = TaskCount.start;

function openFormHundler(taskListElement, taskComponent, taskEditComponent) {
  const openEditorBtn = taskComponent.getElement().querySelector(`.card__btn--edit`);
  openEditorBtn.addEventListener(`click`, function () {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  });
}

function closeFormHundler(taskListElement, taskComponent, taskEditComponent) {
  const editorForm = taskEditComponent.getElement().querySelector(`form`);
  editorForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  });
}

const renderTasks = (taskListElement, task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditorComponent(task);

  openFormHundler(taskListElement, taskComponent, taskEditComponent);
  closeFormHundler(taskListElement, taskComponent, taskEditComponent);

  render(taskListElement, taskComponent.getElement(), Position.beforeend);
};

const renderLoadMoreBtn = (boardComponent, taskListElement, tasks) => {
  const loadMoreBtnComponent = new LoadMoreButtonComponent();
  render(boardComponent.getElement(), loadMoreBtnComponent.getElement(), Position.beforeend);

  loadMoreBtnComponent.getElement().addEventListener(`click`, function () {
    const prevTaskCount = currentTasksCount;
    currentTasksCount = currentTasksCount + TaskCount.add;
    tasks.slice(prevTaskCount, currentTasksCount).forEach((element) => renderTasks(taskListElement, element));

    if (currentTasksCount >= tasks.length) {
      loadMoreBtnComponent.getElement().remove();
      loadMoreBtnComponent.removeElement();
    }
  });
};

const renderBoard = (tasks) => {
  const boardComponent = new BoardComponent();

  render(siteMainElement, boardComponent.getElement(), Position.beforeend);
  render(boardComponent.getElement(), new BoardFilterComponent().getElement(), Position.beforeend);
  render(boardComponent.getElement(), new BoardTaskComponent().getElement(), Position.beforeend);

  const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);
  tasks.slice(0, currentTasksCount).forEach((element) => renderTasks(taskListElement, element));
  renderLoadMoreBtn(boardComponent, taskListElement, tasks);
};

const init = () => {
  render(siteHeaderElement, new MenuComponent().getElement(), Position.beforeend);
  render(siteMainElement, new FilterComponent().getElement(), Position.beforeend);
  renderBoard(tasksData);
};

init();
