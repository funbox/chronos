import { UNITS } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * get date unit value
 * @param  {Object|number} value
 * @param  {string} unit
 * @return {number} - Date unit value
 */
export default (value, unit) => {
  const date = getDate(value);

  if (!isValid(date)) {
    console.error('Invalid date value');
    return undefined;
  }

  let result = 0;

  if (unit === UNITS.YEAR) {
    result = date.getFullYear();
  }

  if (unit === UNITS.MONTH) {
    result = date.getMonth();
  }

  if (unit === UNITS.DAY) {
    result = date.getDate();
  }

  return result;
};
