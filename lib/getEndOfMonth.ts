import ensureDate from './helpers/ensureDate';

/**
 * Get end of month
 * @param value
 * @param diff
 * @return - End of month result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);
  let monthValue = date.getMonth() + 1;

  if (diff) monthValue += diff;

  return new Date(date.getFullYear(), monthValue, 0, 23, 59, 59, 999);
};
