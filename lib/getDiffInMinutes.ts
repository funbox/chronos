import ensureDate from './helpers/ensureDate';

/**
 * Calculate difference of dates in minutes
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1e3 * 60));
};
