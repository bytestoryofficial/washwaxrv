/* eslint-disable no-unused-vars */
import palette from 'theme/palette.jsx';

const camelCase = (input) => {
  return input
    .split(' ')
    .map((word, i) => {
      if (i === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

const arrayToObject = (array, key) => {
  const newObject = {};

  array.forEach((item) => {
    const camelCaseKey = camelCase(item[key]);
    newObject[camelCaseKey] = item;
  });

  return newObject;
};

const getBaseOnboardData = (data) => {
  const initState = [...data];
  const newData = [];

  initState.forEach((item) => {
    const clausesData = [...item.clauses];
    const clausesAsObject = arrayToObject(clausesData, 'name');
    const { clauses: _, ...rest } = item;
    const newObject = { ...rest, ...clausesAsObject };
    newData.push(newObject);
  });

  return newData;
};

const generateStyleCellTooltip = (parameters) => {
  let color = 'unset';

  if (parameters?.keywordFound) color = palette.black;

  if (parameters?.overwritten) color = palette.red;

  return {
    backgroundColor: parameters?.keywordFound ? palette.yellow : 'unset',
    color: color,
  };
};

const generateStyleCell = (parameters) => {
  let color = palette.black;

  if (parameters?.overwritten) color = palette.red;

  return {
    backgroundColor: parameters?.keywordFound ? palette.yellow : 'unset',
    color: color,
  };
};

const generateColumnOptions = (options) => {
  if (!options) return [];
  const newOptions = options.map((opt) => {
    return { label: opt.value, name: opt.value };
  });

  return newOptions;
};

const generateColumnPeopleOptions = (options) => {
  if (!options) return [];
  const newOptions = options.map((opt) => {
    return {
      label: opt.firstName + ' ' + opt.lastName,
      name: opt.firstName + ' ' + opt.lastName,
    };
  });

  return newOptions;
};

const generateDescOptions = (options) => {
  if (!options) return [];
  const newOptions = options.map((opt) => {
    return {
      label: opt.longName,
      name: opt.longName,
    };
  });

  return newOptions;
};

const generateColumnBaseOptions = (options) => {
  if (!options) return [];
  const newOptions = options.map((opt) => {
    return {
      label: opt.name,
      name: opt.name,
    };
  });

  return newOptions;
};

const toEqualCase = (str) => {
  const newString = str.toLowerCase();

  return newString;
};

const filterCase = (str) => {
  if (str.indexOf(' ') >= 0) {
    const strArray = str.split(' ');
    const newString = strArray.join('_').toUpperCase();
    return newString;
  }

  return str.toUpperCase();
};

const getCompareHeaders = (data) => {
  if (!data) return [];

  const headers = [];
  data.forEach((item) => {
    const headerItem = item?.name;
    headers.push(headerItem);
  });

  return headers;
};

export {
  getCompareHeaders,
  getBaseOnboardData,
  filterCase,
  generateDescOptions,
  generateStyleCellTooltip,
  generateColumnOptions,
  generateStyleCell,
  toEqualCase,
  generateColumnPeopleOptions,
  camelCase,
  generateColumnBaseOptions,
};
