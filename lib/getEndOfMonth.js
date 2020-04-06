import ensureDate from './helpers/ensureDate';

/**
 * Get end of month
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of month result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);
  let monthValue = date.getMonth() + 1;

  if (diff) monthValue += diff;

  return new Date(date.getFullYear(), monthValue, 0, 23, 59, 59, 999);
};
