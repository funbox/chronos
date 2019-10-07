import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * Calculate difference between date units
 * @param  {Object} firstDate
 * @param  {Object} secondDate
 * @param  {string} unit
 * @return {number} - Date units difference result
 */
export default (firstDate, secondDate, unit) => {
  let diff = 0;

  if (!isValid(firstDate) || !isValid(secondDate)) return undefined;

  if (unit === UNITS.YEARS) {
    diff = firstDate.getFullYear() - secondDate.getFullYear();
  }

  if (unit === UNITS.MONTHS) {
    diff = firstDate.getMonth() - secondDate.getMonth();
  }

  if (unit === UNITS.DAYS) {
    diff = firstDate.getDate() - secondDate.getDate();
  }

  return diff;
};
