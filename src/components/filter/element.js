import {getFilters} from "./mock";

const getTemplate = (filter, isChecked) => {
  const {name, count} = filter;

  return (`
    <input type="radio" id="filter__${name}" class="filter__input visually-hidden" name="filter" ${isChecked ? `checked` : ``}/>
    <label for="filter__${name}" class="filter__label">${name}<span class="filter__${name}-count"> ${count}</span></label>
  `);
};

const fillTemplate = () => getFilters().map((element, index) => getTemplate(element, index === 0)).join(`\n`);

const getMarkup = () => fillTemplate();

export {getMarkup};
