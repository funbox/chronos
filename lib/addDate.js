import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * Add duration from date
 * @param  {Object} date
 * @param  {number} duration
 * @param  {string} unit
 * @return {Object} - Addition result
 */
export default (date, duration, unit) => {
  if (!isValid(date)) return null;

  const newDate = new Date(date.getTime());

  if (unit === UNITS.YEARS) {
    newDate.setFullYear(date.getFullYear() + duration);
  }

  if (unit === UNITS.MONTHS) {
    newDate.setMonth(date.getMonth() + duration);
  }

  if (unit === UNITS.DAYS) {
    newDate.setDate(date.getDate() + duration);
  }

  return newDate;
};
