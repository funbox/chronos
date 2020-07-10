import ensureDate from './helpers/ensureDate';

/**
 * Get end of year
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of year result
 */
export default (value:  Date | number | string, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff);
  }

  date.setMonth(12);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
