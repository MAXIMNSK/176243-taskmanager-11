import {Position} from "../consts/constants";

export const render = (container, component, place) => {
  switch (place) {
    case Position.afterbegin:
      container.prepend(component.getElement());
      break;
    case Position.beforeend:
      container.append(component.getElement());
      break;
  }
};
