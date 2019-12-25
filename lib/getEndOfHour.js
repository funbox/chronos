import ensureDate from './helpers/ensureDate';

/**
 * Get end of hour
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setHours(date.getHours() + diff);
  }

  date.setMinutes(59, 59, 999);

  return date;
};
