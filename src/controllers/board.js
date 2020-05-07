import BoardFilterComponent from "../components/board_filter";
import BoardTaskComponent from "../components/board_task";
import TaskComponent from "../components/task";
import TaskEditorComponent from "../components/task_editor";
import LoadMoreButtonComponent from "../components/load_more_button";
import {replace} from "../utility/replace";
import {remove} from "../utility/remove";
import {TaskCount, Position} from "../consts/constants";
import {render} from "../utility/render";
import {SORT_TYPE} from "../consts/constants";

let currentTasksCount = TaskCount.start;
const siteMainBlock = document.querySelector(`.main`);

const renderTasks = (taskListElement, task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditorComponent(task);

  openFormHundler(taskComponent, taskEditComponent);
  closeFormHundler(taskComponent, taskEditComponent);

  render(taskListElement, taskComponent, Position.beforeend);
};

const renderSortTasks = (taskListElement, tasks) => {
  tasks.forEach((task) => renderTasks(taskListElement, task));
};

const getSortedTasks = (tasks, sortType, from, to) => {
  const currentShowingTasks = tasks.slice();
  let sortedTasks = [];

  switch (sortType) {
    case SORT_TYPE.DATE_UP:
      sortedTasks = currentShowingTasks.sort((a, b) => a.dueDate - b.dueDate);
      break;
    case SORT_TYPE.DATE_DOWN:
      sortedTasks = currentShowingTasks.sort((a, b) => b.dueDate - a.dueDate);
      break;
    case SORT_TYPE.DEFAULT:
      sortedTasks = currentShowingTasks;
      break;
  }

  return sortedTasks.slice(from, to);
};

const renderLoadMoreBtn = (boardComponent, boardFilterComponent, taskListElement, tasks) => {
  const loadMoreBtnComponent = new LoadMoreButtonComponent();
  render(boardComponent.getElement(), loadMoreBtnComponent, Position.beforeend);

  loadMoreBtnComponent.setClickHandler(() => {
    const prevTaskCount = currentTasksCount;
    currentTasksCount = currentTasksCount + TaskCount.add;

    const sortedTasks = getSortedTasks(tasks, boardFilterComponent.getSortType(), prevTaskCount, currentTasksCount);
    renderSortTasks(taskListElement, sortedTasks);

    if (currentTasksCount >= tasks.length) {
      remove(loadMoreBtnComponent);
    }
  });
};

function openFormHundler(taskComponent, taskEditComponent) {
  taskComponent.setEditBtnClickHandler(() => {
    replace(taskEditComponent, taskComponent);
  });
}

function closeFormHundler(taskComponent, taskEditComponent) {
  taskEditComponent.setSubmitBtnHandler((evt) => {
    evt.preventDefault();
    replace(taskComponent, taskEditComponent);
  });
}

export default class BoardController {
  constructor(container) {
    this._boardComponent = container;
    this._boardFilterComponent = new BoardFilterComponent();
    this._boardTaskComponent = new BoardTaskComponent();
  }

  render(tasks) {
    render(siteMainBlock, this._boardComponent, Position.beforeend);
    render(this._boardComponent.getElement(), this._boardFilterComponent, Position.beforeend);
    render(this._boardComponent.getElement(), this._boardTaskComponent, Position.beforeend);

    const taskListElement = this._boardComponent.getElement().querySelector(`.board__tasks`);
    const showingTasksCount = TaskCount.start;

    renderSortTasks(taskListElement, tasks.slice(0, showingTasksCount));
    renderLoadMoreBtn(this._boardComponent, this._boardFilterComponent, taskListElement, tasks);

    this._boardFilterComponent.setSortTypeChangeHandler((sortType) => {
      currentTasksCount = TaskCount.add;

      const from = 0;
      const sortedTasks = getSortedTasks(tasks, sortType, from, currentTasksCount);

      taskListElement.innerHTML = ``;
      renderSortTasks(taskListElement, sortedTasks);
    });
  }
}
