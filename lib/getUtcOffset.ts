import ensureDate from './helpers/ensureDate';

/**
 * Get current timezone offset to UTC in hours
 * @param  {Date|number|string} value
 * @return {number} - Offset value in hours result
 */
export default (value: Date | number | string) => {
  const date = ensureDate(value);

  return Math.floor(date.getTimezoneOffset() / -60);
};