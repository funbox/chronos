import { UNITS } from './constants';
import isValid from './helpers/is-valid';

/**
 * Compares if date units are equal
 * @param  {Object} firstDate
 * @param  {Object} secondDate
 * @param  {string} unit
 * @return {boolean} - Date units equality result
 */
export default (firstDate, secondDate, unit) => {
  let isEqual = false;

  if (!isValid(firstDate) || !isValid(secondDate)) return undefined;

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
