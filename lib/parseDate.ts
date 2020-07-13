import ensureDate from './helpers/ensureDate';
import { getYear } from '.';

/**
 * Parse string to Date object
 * @param  {string} value
 * @param  {string=} format
 * @return {Date} - Date object result
 */
export default (value: string, format: string): Date => {
  if (!value) {
    throw new Error(`Invalid value: ${value}`);
  }

  if (!format) {
    return ensureDate(value);
  }

  const dateSeparators = /[.,-/\s]/;
  const formatArray = format.split(dateSeparators);
  const valueArray = value.split(dateSeparators);

  if (formatArray.length > valueArray.length) {
    throw new Error(`Format doesn't match value: ${format}, ${value}`);
  }

  const dateObj = formatArray.reduce((acc: Record<string, number | false>, item: string, i: number) => {
    if (item === 'YYYY') {
      acc.year = valueArray[i].length === 4 && +valueArray[i];
    } else if (item === 'YY') {
      const century = valueArray[i] > getYear(new Date()).toString().slice(-2) ? 19 : 20;

      acc.year = valueArray[i].length === 2 && +`${century}${valueArray[i]}`;
    } else if (item === 'MM') {
      acc.month = +valueArray[i] <= 12 && +valueArray[i] - 1;
    } else if (item === 'D' || item === 'DD') {
      acc.date = +valueArray[i] <= 31 && +valueArray[i];
    }

    return acc;
  }, {});

  if (Object.keys(dateObj).some(key => dateObj[key] === false)) {
    throw new Error(`Invalid value: ${value}`);
  }

  return ensureDate(new Date(+dateObj.year, +dateObj.month, +dateObj.date));
};
