import {getClassRepeat, getClassDeadline, showDate, showTime, createElement} from "../utility/utility";
import {ACCENT_COLORS, WEEK_DAYS, MONTHS} from "../consts/constants";
import {getMarkupDays} from "./task/markup_days";
import {getMarkupColors} from "./task/markup_colors";

const createTaskEditor = (task) => {
  const {color, description, dueDate, repeatingDays} = task;

  const dateShow = !!dueDate;
  const classRepeat = getClassRepeat(repeatingDays);
  const classDeadline = getClassDeadline(dueDate);
  const date = showDate(dateShow, dueDate, MONTHS);
  const time = showTime(dateShow, dueDate);

  const renderButtonsDays = WEEK_DAYS.map((element, index) => getMarkupDays(element, index, repeatingDays)).join(``);
  const renderButtonsColor = ACCENT_COLORS.map((element, index) => getMarkupColors(element, index, color)).join(``);

  return (
    `<article class="card card--edit card--${color} ${classRepeat} ${classDeadline}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
          <div class="card__textarea-wrap">
            <label>
              <textarea class="card__text" placeholder="Start typing your text here..." name="text">${description}</textarea>
            </label>
          </div>
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">date:<span class="card__date-status">yes</span></button>
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input class="card__date" type="text" placeholder="" name="date" value="${date} ${time}"/>
                  </label>
                </fieldset>
                <button class="card__repeat-toggle" type="button">repeat:<span class="card__repeat-status">yes</span></button>
                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${renderButtonsDays}
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${renderButtonsColor}
              </div>
            </div>
          </div>
          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};

export default class TaskEditor {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createTaskEditor(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
