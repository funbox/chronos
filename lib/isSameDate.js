import { UNITS } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * Compares if date units are equal
 * @param  {Object|number} firstValue
 * @param  {Object|number} secondValue
 * @param  {string} unit
 * @return {boolean} - Date units equality result
 */
export default (firstValue, secondValue, unit) => {
  const firstDate = getDate(firstValue);
  const secondDate = getDate(secondValue);
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
