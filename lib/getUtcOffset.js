import isValid from './helpers/is-valid';

/**
 * Get current timezone offset to UTC in hours
 * @param  {Object} date
 * @return {number} - Formatted date result
 */
export default (date) => {
  if (!isValid(date)) return 0;

  return Math.abs(date.getTimezoneOffset() / 60);
};
