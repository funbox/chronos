import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get end of hours
 * @param value
 * @param diff
 * @return - End of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setHours(date.getHours() + diff);
  }

  date.setMinutes(59, 59, 999);

  return date;
};
