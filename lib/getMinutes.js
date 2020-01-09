import ensureDate from './helpers/ensureDate';

/**
 * get minutes
 * @param  {Date|number|string} value
 * @return {number} - minute value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getMinutes();
};
