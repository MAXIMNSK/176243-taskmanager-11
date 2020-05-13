const ACCENT_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const Position = {
  beforebegin: `beforebegin`,
  afterbegin: `afterbegin`,
  beforeend: `beforeend`,
  afterend: `afterend`,
};

const TaskCount = {
  max: 23,
  start: 5,
  add: 5,
};

const SORT_TYPE = {
  DEFAULT: `default`,
  DATE_UP: `date-up`,
  DATE_DOWN: `date-down`,
};

export {ACCENT_COLORS, WEEK_DAYS, MONTHS, Position, TaskCount, SORT_TYPE};
