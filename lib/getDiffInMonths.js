import ensureDate from './helpers/ensureDate';

/**
 * Calculate difference of dates in months
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {number} - Difference result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);
  let diff = 0;

  diff += (firstDate.getFullYear() - secondDate.getFullYear()) * 12;
  diff += firstDate.getMonth() - secondDate.getMonth();

  return diff;
};
