import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Calculate difference between date units
 * @param  {Date|number} firstValue
 * @param  {Date|number} secondValue
 * @param  {string} unit
 * @return {number} - Date units difference result
 */
export default (firstValue, secondValue, unit) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);
  let diff = 0;

  if (unit === UNITS.YEARS) {
    diff = firstDate.getFullYear() - secondDate.getFullYear();
  }

  if (unit === UNITS.MONTHS) {
    diff = firstDate.getMonth() - secondDate.getMonth();
  }

  if (unit === UNITS.DAYS) {
    diff = firstDate.getDate() - secondDate.getDate();
  }

  if (unit === UNITS.MINUTES) {
    diff = firstDate.getMinutes() - secondDate.getMinutes();
  }

  return diff;
};
