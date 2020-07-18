import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Compares if years of dates are equal
 * @param firstValue
 * @param secondValue
 * @return - Equality result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear();
};
