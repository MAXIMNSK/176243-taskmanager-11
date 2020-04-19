import {getMarkup} from "./element";

/**
 * Функция возвращает секцию вёрстки в виде строки
 * @return {string} возвращает блок разметки
 */
export const createFilter = () => {
  return (
    `<section class="main__filter filter container">
      ${getMarkup()}
    </section>`
  );
};
