import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * get date unit value
 * @param  {Date|number} value
 * @param  {string} unit
 * @return {number} - Date unit value
 */
export default (value, unit) => {
  const date = ensureDate(value);

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
