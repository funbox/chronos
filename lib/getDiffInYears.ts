import ensureDate from './helpers/ensureDate';

/**
 * Calculate difference of dates in years
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {number} - Difference result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() - secondDate.getFullYear();
};
