const getNames = () => [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];
const getCount = () => Math.floor(Math.random() * 50);

const getProperties = (element) => ({
  name: element,
  count: getCount(),
});

const getFilters = () => getNames().map((element) => getProperties(element));

export {getFilters};
