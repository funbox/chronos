import ensureDate from './helpers/ensureDate';

/**
 * Calculate difference of dates in days
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {number} - Difference result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1e3 * 60 * 60 * 24));
};
