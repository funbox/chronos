import ensureDate from './helpers/ensureDate';

/**
 * get hours
 * @param  {Date|number|string} value
 * @return {number} - hour value
 */
export default (value:  Date | number | string) => {
  const date = ensureDate(value);

  return date.getHours();
};
