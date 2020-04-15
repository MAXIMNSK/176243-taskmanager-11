import {getTime} from "../utility";
import {MONTHS} from "../constants";

export const createTask = (task) => {
  const {color, description, dueDate, isArchive, isFavorite, repeatingDays} = task;

  const classRepeat = Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``;
  const dateExpired = dueDate instanceof Date && dueDate < Date.now();
  const classDeadline = dateExpired ? `card--deadline` : ``;

  const showDateStatus = !!dueDate;
  const formedDate = showDateStatus ? `${dueDate.getDate()} ${MONTHS[dueDate.getMonth()]}` : ``;
  const formedTime = showDateStatus ? getTime(dueDate) : ``;

  const btnArchiveStatus = isArchive ? `` : `card__btn--disabled`;
  const btnFavoriteStatus = isFavorite ? `` : `card__btn--disabled`;

  return (
    `<article class="card card--${color} ${classRepeat} ${classDeadline}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">edit</button>
            <button type="button" class="card__btn card__btn--archive ${btnArchiveStatus}">archive</button>
            <button type="button" class="card__btn card__btn--favorites ${btnFavoriteStatus}">favorites</button>
          </div>
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${formedDate}</span>
                    <span class="card__time">${formedTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};
