import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Get end of date unit
 * @param  {Date|number} value
 * @param  {string} unit
 * @return {Date} - End of date result
 */
export default (value, unit) => {
  const date = ensureDate(value);

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
