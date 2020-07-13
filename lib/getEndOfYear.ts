import ensureDate from './helpers/ensureDate';

/**
 * Get end of year
 * @param value
 * @param diff
 * @return - End of year result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff);
  }

  date.setMonth(12);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
