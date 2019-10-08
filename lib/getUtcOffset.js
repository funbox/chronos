import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * Get current timezone offset to UTC in hours
 * @param  {Object|number} value
 * @return {number} - Formatted date result
 */
export default (value) => {
  const date = getDate(value);

  if (!isValid(date)) {
    console.error('Invalid date value');
    return undefined;
  }

  return Math.abs(date.getTimezoneOffset() / 60);
};
