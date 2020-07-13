import ensureDate from './helpers/ensureDate';

/**
 * Get month
 * @param  {Date|number|string} value
 * @return {number} - Month value
 */
export default (value:  Date | number | string) => {
  const date = ensureDate(value);

  return date.getMonth();
};