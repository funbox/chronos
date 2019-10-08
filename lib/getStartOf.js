import { UNITS } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * get start of date unit
 * @param  {Object|number} value
 * @param  {string} unit
 * @return {Object} - Date result
 */
export default (value, unit) => {
  const date = getDate(value);

  if (!isValid(date)) {
    console.error('Invalid date value');
    return undefined;
  }

  if (unit === UNITS.YEAR) {
    date.setMonth(0);
  }

  if (unit === UNITS.YEAR || unit === UNITS.MONTH) {
    date.setDate(1);
  }

  if (unit === UNITS.YEAR || unit === UNITS.MONTH || unit === UNITS.DAY) {
    date.setHours(0, 0, 0, 0);
  }

  return date;
};
