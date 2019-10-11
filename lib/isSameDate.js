import { UNITS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Compares if date units are equal
 * @param  {Object|number} firstValue
 * @param  {Object|number} secondValue
 * @param  {string} unit
 * @return {boolean} - Date units equality result
 */
export default (firstValue, secondValue, unit) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);
  let isEqual = false;

  if (unit === UNITS.YEAR) {
    isEqual = firstDate.getFullYear() === secondDate.getFullYear();
  }

  if (unit === UNITS.MONTH) {
    isEqual = firstDate.getMonth() === secondDate.getMonth();
  }

  if (unit === UNITS.DAY) {
    isEqual = firstDate.getDate() === secondDate.getDate();
  }

  return isEqual;
};
