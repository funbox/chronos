import ensureDate from './helpers/ensure-date';

/**
 * Get start of decade
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  date.setFullYear(Math.floor(date.getFullYear() / 10) * 10);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff * 10);
  }

  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
