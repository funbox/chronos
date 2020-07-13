import ensureDate from './helpers/ensureDate';

/**
 * Get start of hours
 * @param value
 * @param  diff
 * @return - Start of hour result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setHours(date.getHours() + diff);
  }

  date.setMinutes(0, 0, 0);

  return date;
};
