import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * Add duration from date
 * @param  {Object} date
 * @param  {number} duration
 * @param  {string} unit
 * @return {Object} - Add result
 */
export default (date, duration, unit) => {
  if (!isValid(date)) return null;

  if (unit === UNITS.YEARS) {
    date.setFullYear(date.getFullYear() + duration);
  }

  if (unit === UNITS.MONTHS) {
    date.setMonth(date.getMonth() + duration);
  }

  if (unit === UNITS.DAYS) {
    date.setDate(date.getDate() + duration);
  }

  return date;
};
