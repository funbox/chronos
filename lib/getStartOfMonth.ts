import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get start of month
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  date.setDate(1);

  if (diff) {
    date.setMonth(date.getMonth() + diff);
  }

  date.setHours(0, 0, 0, 0);

  return date;
};
