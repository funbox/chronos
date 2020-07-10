import ensureDate from './helpers/ensureDate';

/**
 * Get start of hours
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of hour result
 */
export default (value: Date | number | string, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setHours(date.getHours() + diff);
  }

  date.setMinutes(0, 0, 0);

  return date;
};
