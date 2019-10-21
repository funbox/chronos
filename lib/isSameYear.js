import ensureDate from './helpers/ensure-date';

/**
 * Compares if years of dates are equal
 * @param  {Date|number} firstValue
 * @param  {Date|number} secondValue
 * @return {boolean} - Equality result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear();
};
