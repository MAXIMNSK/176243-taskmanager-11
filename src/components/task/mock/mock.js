import {getRandomNumber} from "../../utility";
import {ACCENT_COLORS} from "../../consts/constants";

const DAYS_REPEAT = {
  "mo": Math.random() > 0.5,
  "tu": Math.random() > 0.5,
  "we": Math.random() > 0.5,
  "th": Math.random() > 0.5,
  "fr": Math.random() > 0.5,
  "sa": Math.random() > 0.5,
  "su": Math.random() > 0.5,
};

const contentTasks = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const getTaskProperties = () => ({
  color: ACCENT_COLORS[getRandomNumber(ACCENT_COLORS.length)],
  description: contentTasks[getRandomNumber(contentTasks.length)],
  dueDate: Math.random() > 0.5 ? new Date() : ``,
  isArchive: Math.random() > 0.5,
  isFavorite: Math.random() > 0.5,
  repeatingDays: Object.assign({}, DAYS_REPEAT),
});

const getTaskData = (count) => new Array(count).fill(``).map(getTaskProperties);

export {getTaskData};
