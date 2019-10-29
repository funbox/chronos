import ensureDate from './helpers/ensure-date';

/**
 * Calculate difference of dates in minutes
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {number} - Difference result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1e3 * 60));
};