import { UNITS } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * Subtract duration from date
 * @param  {Object|number} value
 * @param  {number} duration
 * @param  {string} unit
 * @return {Object} - Subtraction result
 */
export default (value, duration, unit) => {
  const date = getDate(value);

  if (!isValid(date)) {
    console.error('Invalid date value');
    return undefined;
  }

  const newDate = new Date(date.getTime());

  if (unit === UNITS.YEARS) {
    newDate.setFullYear(date.getFullYear() - duration);
  }

  if (unit === UNITS.MONTHS) {
    newDate.setMonth(date.getMonth() - duration);
  }

  if (unit === UNITS.DAYS) {
    newDate.setDate(date.getDate() - duration);
  }

  return newDate;
};
