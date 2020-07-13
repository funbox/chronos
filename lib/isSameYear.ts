import ensureDate from './helpers/ensureDate';

/**
 * Compares if years of dates are equal
 * @param firstValue
 * @param secondValue
 * @return - Equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear();
};
