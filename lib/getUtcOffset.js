import ensureDate from './helpers/ensureDate';

/**
 * Get current timezone offset to UTC in hours
 * @param  {Date|number|string} value
 * @return {number} - Offset value in hours result
 */
export default (value) => {
  const date = ensureDate(value);

  return Math.abs(date.getTimezoneOffset() / 60);
};
