import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Subtract duration from date
 * @param  {Date|number} value
 * @param  {number} duration
 * @param  {string} unit
 * @return {Date} - Subtraction result
 */
export default (value, duration, unit) => {
  const date = ensureDate(value);

  if (unit === UNITS.YEARS) {
    date.setFullYear(date.getFullYear() - duration);
  }

  if (unit === UNITS.MONTHS) {
    date.setMonth(date.getMonth() - duration);
  }

  if (unit === UNITS.DAYS) {
    date.setDate(date.getDate() - duration);
  }

  return date;
};
