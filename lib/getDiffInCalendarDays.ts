import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in calendar days
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  const diff = (firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0)) / (1e3 * 60 * 60 * 24);

  return diff >= 0 ? Math.floor(diff) : Math.ceil(diff);
};
