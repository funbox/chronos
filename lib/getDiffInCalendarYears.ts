import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in calendar years
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() - secondDate.getFullYear();
};
