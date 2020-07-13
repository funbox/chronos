import ensureDate from './helpers/ensureDate';

/**
 * get day
 * @param  {Date|number|string} value
 * @return {number} - Day value
 */
export default (value: Date | number | string) => {
  const date = ensureDate(value);

  return date.getDate();
};