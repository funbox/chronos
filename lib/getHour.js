import ensureDate from './helpers/ensureDate';

/**
 * get hour
 * @param  {Date|number|string} value
 * @return {number} - hour value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getHours();
};
