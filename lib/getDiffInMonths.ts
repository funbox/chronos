import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in months
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);
  let diff = 0;

  diff += (firstDate.getFullYear() - secondDate.getFullYear()) * 12;
  diff += firstDate.getMonth() - secondDate.getMonth();

  return diff;
};
