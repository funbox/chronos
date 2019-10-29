import ensureDate from './helpers/ensure-date';

/**
 * Get start of month
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setMonth(date.getMonth() + diff);
  }

  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};