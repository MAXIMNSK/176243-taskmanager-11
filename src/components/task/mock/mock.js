import {getRandomNumber} from "../../utility";
import {ACCENT_COLORS} from "../../constants";

const DAYS_REPEAT = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

const contentTasks = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
  `Прочитать Выразительный JS`,
  `Прочитать Грокаем Алгоритмы`,
  `Почитать про структуры данных`,
];

const getTaskProperties = () => {
  return {
    color: ACCENT_COLORS[getRandomNumber(ACCENT_COLORS.length)],
    description: contentTasks[getRandomNumber(contentTasks.length)],
    dueDate: Math.random() > 0.5 ? new Date() : ``,
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    repeatingDays: Object.assign({}, DAYS_REPEAT, {"mo": Math.random() > 0.5}),
  };
};

export const getTaskData = (count) => new Array(count).fill(``).map(getTaskProperties);
