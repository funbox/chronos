import ensureDate from './helpers/ensureDate';

/**
 * Compares if years of dates are equal
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {boolean} - Equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear();
};
