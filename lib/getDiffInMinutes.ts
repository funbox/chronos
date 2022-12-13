import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in full minutes
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  const diff = (firstDate.getTime() - secondDate.getTime()) / (1e3 * 60);

  return diff >= 0 ? Math.floor(diff) : Math.ceil(diff);
};
