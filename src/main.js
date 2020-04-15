import {createMenu} from "./components/menu";
import {createFilter} from "./components/filter/filter";
import {createBoard} from "./components/board";
import {createTask} from "./components/task/task";
import {createTaskEditor} from "./components/task/taskeditor";
import {createLoadMoreButton} from "./components/loadmorebutton";
import {Position, TaskCount} from "./components/constants";
import {getTaskData} from "./components/task/mock/mock";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const taskDataTemplate = getTaskData(TaskCount.max);
let showCurrentTasks = TaskCount.start;

const fillTaskBoard = (taskBoard, count) => {
  for (let i = 0; i < count; i++) {
    render(taskBoard, createTask(taskDataTemplate[i]));
  }
};

const render = (container, template, place = Position.beforeend) => container.insertAdjacentHTML(place, template);

const loadMoreTasks = () => {
  const taskListElement = siteMainElement.querySelector(`.board__tasks`);
  let loadMoreBtn = document.querySelector(`.load-more`);

  loadMoreBtn.addEventListener(`click`, () => {
    const currentCount = showCurrentTasks;
    showCurrentTasks = showCurrentTasks + TaskCount.add;
    taskDataTemplate.slice(currentCount, showCurrentTasks).forEach((task) => render(taskListElement, createTask(task)));

    if (showCurrentTasks >= taskDataTemplate.length) {
      loadMoreBtn.remove();
    }
  });
};

const init = () => {
  render(siteHeaderElement, createMenu());
  render(siteMainElement, createFilter());
  render(siteMainElement, createBoard());

  const boardElement = siteMainElement.querySelector(`.board`);
  const taskListElement = siteMainElement.querySelector(`.board__tasks`);

  render(taskListElement, createTaskEditor(taskDataTemplate[0]));
  fillTaskBoard(taskListElement, showCurrentTasks);
  render(boardElement, createLoadMoreButton());
  loadMoreTasks();
};

init();
