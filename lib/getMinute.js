import ensureDate from './helpers/ensure-date';

/**
 * get minute
 * @param  {Date|number|string} value
 * @return {number} - minute value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getMinutes();
};
