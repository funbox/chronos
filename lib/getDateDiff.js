import { UNITS } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * Calculate difference between date units
 * @param  {Object|number} firstValue
 * @param  {Object|number} secondValue
 * @param  {string} unit
 * @return {number} - Date units difference result
 */
export default (firstValue, secondValue, unit) => {
  const firstDate = getDate(firstValue);
  const secondDate = getDate(secondValue);
  let diff = 0;

  if (!isValid(firstDate) || !isValid(secondDate)) {
    console.error('Invalid date value');
    return undefined;
  }

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
