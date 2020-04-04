import {createMenu} from "./components/menu";
import {createFilter} from "./components/filter";
import {createBoard} from "./components/board";
import {createTask} from "./components/task";
import {createTaskEditor} from "./components/taskeditor";
import {createLoadMoreButton} from "./components/loadmorebutton";

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const propertiesWhere = {
  beforebegin: `beforebegin`,
  afterbegin: `afterbegin`,
  beforeend: `beforeend`,
  afterend: `afterend`,
};

/**
 * Заполяем список задач, плитками оных
 * @param {*} taskBoard элемент в который мы рендерим возвращаемое функцией значение
 * @param {*} count передаём количество экспортируемых элементов
 */
const fillTaskList = (taskBoard, count) => {
  for (let i = 0; i < count; i++) {
    render(taskBoard, createTask());
  }
};

/**
 * Функция рендерит в разметку входные данные в виде строки
 * @param {*} container целевой блок в который будет рендерится шаблон
 * @param {*} template шаблон который функция рендерит
 * @param {*} place передаём позицию добавляемого элемента. Значение по умолчанию beforeend
 * @return {*} возвращает результат выполнения функции
 */
const render = (container, template, place = propertiesWhere.beforeend) => container.insertAdjacentHTML(place, template);

/**
 * Функция инициализирует блоки в разметку
 */
const init = () => {
  render(siteHeaderElement, createMenu());
  render(siteMainElement, createFilter());
  render(siteMainElement, createBoard());

  const boardElement = siteMainElement.querySelector(`.board`);
  const taskListElement = siteMainElement.querySelector(`.board__tasks`);

  render(taskListElement, createTaskEditor());
  fillTaskList(taskListElement, TASK_COUNT);
  render(boardElement, createLoadMoreButton());
};

init();
