import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get end of day
 * @param value
 * @param diff
 * @return - End of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setDate(date.getDate() + diff);
  }

  date.setHours(23, 59, 59, 999);

  return date;
};
