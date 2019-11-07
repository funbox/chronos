import ensureDate from './helpers/ensure-date';

/**
 * Get start of week
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of date result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);
  const weekDay = date.getDay() || 7;

  if (weekDay !== 1) {
    date.setDate(date.getDate() - (weekDay - 1));
  }

  if (diff) {
    date.setDate(date.getDate() + diff * 7);
  }

  date.setHours(0, 0, 0, 0);

  return date;
};