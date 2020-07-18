import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in days
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1e3 * 60 * 60 * 24));
};
