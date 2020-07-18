import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Compares if dates are equal
 * @param firstValue
 * @param secondValue
 * @return - Date units equality result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getDate() === secondDate.getDate()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getFullYear() === secondDate.getFullYear();
};
