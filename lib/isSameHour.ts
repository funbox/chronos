import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Compares if hours of the same date are equal
 * @param firstValue
 * @param secondValue
 * @return - Hours units equality result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate()
    && firstDate.getHours() === secondDate.getHours();
};
