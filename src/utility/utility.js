const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getTime = (date) => {
  const hours = date.getHours() < 10 ? `0` + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0` + date.getMinutes() : date.getMinutes();

  return `${hours}:${minutes}`;
};

const getClassRepeat = (days) => Object.values(days).some(Boolean) ? `card--repeat` : ``;
const getClassDeadline = (date) => date instanceof Date && date < Date.now() ? `card--deadline` : ``;
const showDate = (visible, date, months) => visible ? `${date.getDate()} ${months[date.getMonth()]}` : ``;
const showTime = (visible, date) => visible ? getTime(date) : ``;

export {getRandomNumber, getClassRepeat, getClassDeadline, showDate, showTime};
