import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * get date unit value
 * @param  {Object} date
 * @param  {string} unit
 * @return {number} - Date unit value
 */
export default (date, unit) => {
  if (!isValid(date)) return undefined;

  let value = 0;

  if (unit === UNITS.YEAR) {
    value = date.getFullYear();
  }

  if (unit === UNITS.MONTH) {
    value = date.getMonth();
  }

  if (unit === UNITS.DAY) {
    value = date.getDate();
  }

  return value;
};
