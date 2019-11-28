import ensureDate from './helpers/ensureDate';

/**
 * Get end of month
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of month result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setMonth(date.getMonth() + diff);
  }

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
