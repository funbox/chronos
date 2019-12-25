import ensureDate from './helpers/ensureDate';

/**
 * Get end of minute
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - End of minute result
 */
export default (value, diff = 0) => {
  const date = ensureDate(value);

  if (diff) {
    date.setMinutes(date.getMinutes() + diff);
  }

  date.setSeconds(59, 999);

  return date;
};
