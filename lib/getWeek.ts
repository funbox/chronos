import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get week number from start of the year
 * @param value
 * @return - Week value
 */
export default (value: ChronosDate): number => {
  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  const date = ensureDate(value);
  const januaryFirst = new Date(date.getFullYear(), 0, 1);

  return Math.ceil((((date.getTime() - januaryFirst.getTime()) / DAY_IN_MS) + januaryFirst.getDay() + 1) / 7);
};
