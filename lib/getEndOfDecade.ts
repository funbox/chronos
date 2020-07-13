import ensureDate from './helpers/ensureDate';

/**
 * Get end of decade
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of year result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  date.setFullYear(Math.floor(date.getFullYear() / 10) * 10 + 9);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff * 10);
  }

  date.setMonth(12);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
