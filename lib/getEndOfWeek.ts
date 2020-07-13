import ensureDate from './helpers/ensureDate';

/**
 * Get end of week
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);
  const weekDay = date.getDay();

  if (weekDay !== 0) {
    date.setDate(date.getDate() + (7 - weekDay));
  }

  if (diff) {
    date.setDate(date.getDate() + diff * 7);
  }

  date.setHours(23, 59, 59, 999);

  return date;
};
