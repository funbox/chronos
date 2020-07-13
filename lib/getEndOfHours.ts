import ensureDate from './helpers/ensureDate';

/**
 * Get end of hours
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of date result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setHours(date.getHours() + diff);
  }

  date.setMinutes(59, 59, 999);

  return date;
};
