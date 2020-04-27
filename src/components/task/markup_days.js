const getMarkupDays = (day, index, repeatedDays) => {
  return (
    `<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-${day}-${index}" name="repeat" value="${day}" ${repeatedDays[day] ? `checked` : ``}/>
    <label class="card__repeat-day" for="repeat-${day}-${index}">${day}</label>`
  );
};

export {getMarkupDays};
