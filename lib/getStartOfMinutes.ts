import ensureDate from './helpers/ensureDate';

/**
 * Get start of minutes
 * @param  {Date|number|string} value
 * @param  {number} diff
 * @return {Date} - Start of minute result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setMinutes(date.getMinutes() + diff);
  }

  date.setSeconds(0, 0);

  return date;
};
