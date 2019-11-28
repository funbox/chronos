/**
 * Format to Date object
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
  const valueArray = value.split(dateSeparators);
  const formatArray = format.split(dateSeparators);

  const dateObj = formatArray.reduce((acc, item, i) => {
    if (item === 'YYYY') {
      acc.year = valueArray[i].length === 4 && +valueArray[i];
    } else if (item === 'YY') {
      acc.year = valueArray[i].length === 2 && +valueArray[i];
    } else if (item === 'MM') {
      acc.month = valueArray[i] <= 12 && +valueArray[i] - 1;
    } else if (item === 'D' || item === 'DD') {
      acc.date = valueArray[i] <= 31 && +valueArray[i];
    }

    return acc;
  }, {});

  if (Object.values(dateObj).some(item => item === false)) {
    handleError(value);
  }

  const date = new Date(dateObj.year, dateObj.month, dateObj.date);

  if (!(date instanceof Date) || isNaN(date)) { // eslint-disable-line no-restricted-globals
    handleError(date);
  }

  return date;
};

function handleError(err) {
  throw new Error(`Invalid date value: ${err}`);
}
