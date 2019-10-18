import ensureDate from './helpers/ensure-date';

/**
 * Get start of year
 * @param  {Date|number} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff);
  }

  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
