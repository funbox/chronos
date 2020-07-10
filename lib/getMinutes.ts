import ensureDate from './helpers/ensureDate';

/**
 * get minutes
 * @param  {Date|number|string} value
 * @return {number} - minute value
 */
export default (value:  Date | number | string) => {
  const date = ensureDate(value);

  return date.getMinutes();
};
