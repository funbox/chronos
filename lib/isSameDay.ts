import ensureDate from './helpers/ensureDate';

/**
 * Compares if dates are equal
 * @param firstValue
 * @param secondValue
 * @return - Date units equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getDate() === secondDate.getDate()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getFullYear() === secondDate.getFullYear();
};
