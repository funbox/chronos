import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * get end of date unit
 * @param  {Object} date
 * @param  {string} unit
 * @return {Object} - Date result
 */
export default (date, unit) => {
  if (!isValid(date)) return undefined;

  if (unit === UNITS.YEAR) {
    date.setMonth(12);
  }

  if (unit === UNITS.MONTH) {
    date.setMonth(date.getMonth() + 1);
  }

  if (unit === UNITS.YEAR || unit === UNITS.MONTH) {
    date.setDate(0);
  }

  if (unit === UNITS.YEAR || unit === UNITS.MONTH || unit === UNITS.DAY) {
    date.setHours(23, 59, 59, 999);
  }

  return date;
};
