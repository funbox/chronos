import ensureDate from './helpers/ensure-date';

/**
 * Get end of day
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setDate(date.getDate() + diff);
  }

  date.setHours(23, 59, 59, 999);

  return date;
};
