import ensureDate from './helpers/ensureDate';

/**
 * Get start of month
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setMonth(date.getMonth() + diff);
  }

  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
