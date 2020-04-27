const getMarkupColors = (color, index, currentColor) => {
  return (
    `<input type="radio" id="color-${color}-${index}" class="card__color-input card__color-input--${color} visually-hidden" name="color" value="${color}" ${currentColor === color ? `checked` : ``}/>
    <label for="color-${color}-${index}" class="card__color card__color--${color}">${color}</label>`
  );
};

export {getMarkupColors};
