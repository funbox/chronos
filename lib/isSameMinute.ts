import ensureDate from './helpers/ensureDate';

/**
 * Compares if minutes of the same date are equal
 * @param firstValue
 * @param secondValue
 * @return - Minutes units equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate()
    && firstDate.getHours() === secondDate.getHours()
    && firstDate.getMinutes() === secondDate.getMinutes();
};
