import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Get start of date unit
 * @param  {Date|number} value
 * @param  {string} unit
 * @return {Date} - Start of date result
 */
export default (value, unit) => {
  const date = ensureDate(value);

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
