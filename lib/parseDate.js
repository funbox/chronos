import ensureDate from './helpers/ensureDate';

/**
 * Parse string to Date object
 * @param  {String} value
 * @param  {string} format
 * @return {Date} - Date object result
 */
export default (value, format) => {
  if (!value) {
    throw new Error(`Invalid value: ${value}`);
  }

  if (!format) {
    throw new Error(`Invalid format: ${format}`);
  }

  const dateSeparators = /[.,-/\s]/;
  const formatArray = format.split(dateSeparators);
  const valueArray = value.split(dateSeparators).map(item => +item);

  if (formatArray.length > valueArray.length) {
    throw new Error(`Format doesn't match value: ${format}, ${value}`);
  }

  const dateObj = formatArray.reduce((acc, item, i) => {
    if (item === 'YYYY') {
      acc.year = valueArray[i].toString().length === 4 && valueArray[i];
    } else if (item === 'YY') {
      acc.year = valueArray[i].toString().length === 2 && valueArray[i];
    } else if (item === 'MM') {
      acc.month = valueArray[i] <= 12 && valueArray[i] - 1;
    } else if (item === 'D' || item === 'DD') {
      acc.date = valueArray[i] <= 31 && valueArray[i];
    }

    return acc;
  }, {});

  if (Object.keys(dateObj).some(key => dateObj[key] === false)) {
    throw new Error(`Invalid value: ${value}`);
  }

  return ensureDate(new Date(dateObj.year, dateObj.month, dateObj.date));
};
