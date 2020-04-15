const getNames = () => [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];
const getCount = () => Math.floor(Math.random() * 50);

const createFilters = () => {
  return getNames().map((element) => {
    return {
      name: element,
      count: getCount(),
    };
  });
};

export const getFilters = () => createFilters();
