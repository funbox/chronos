import ensureDate from './helpers/ensureDate';

/**
 * Calculate difference of dates in minutes
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {number} - Difference result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1e3 * 60));
};