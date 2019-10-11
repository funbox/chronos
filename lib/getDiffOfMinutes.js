import ensureDate from './helpers/ensure-date';

/**
 * Calculate difference of dates in minutes
 * @param  {Date|number} firstValue
 * @param  {Date|number} secondValue
 * @return {number} - Difference result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return (firstDate.getTime() - secondDate.getTime()) / (1e3 * 60);
};
