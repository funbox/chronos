import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * get start of date unit
 * @param  {Object} date
 * @param  {string} unit
 * @return {Object} - Date result
 */
export default (date, unit) => {
  if (!isValid(date)) return undefined;

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
