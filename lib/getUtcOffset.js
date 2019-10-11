import ensureDate from './helpers/ensure-date';

/**
 * Get current timezone offset to UTC in hours
 * @param  {Date|number} value
 * @return {number} - Offset value in hours result
 */
export default (value) => {
  const date = ensureDate(value);

  return Math.abs(date.getTimezoneOffset() / 60);
};
