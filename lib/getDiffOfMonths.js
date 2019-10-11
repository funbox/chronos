import ensureDate from './helpers/ensure-date';

/**
 * Calculate difference of dates in months
 * @param  {Date|number} firstValue
 * @param  {Date|number} secondValue
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
