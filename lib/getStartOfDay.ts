import ensureDate from './helpers/ensureDate';

/**
 * Get start of day
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value: Date | number | string, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setDate(date.getDate() + diff);
  }

  date.setHours(0, 0, 0, 0);

  return date;
};
