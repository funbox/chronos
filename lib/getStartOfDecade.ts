import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get start of decade
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  date.setFullYear(Math.floor(date.getFullYear() / 10) * 10);

  if (diff) {
    date.setFullYear(date.getFullYear() + diff * 10);
  }

  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
