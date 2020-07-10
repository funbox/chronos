import ensureDate from './helpers/ensureDate';

/**
 * Compares if months of dates are equal
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {boolean} - Date units equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getMonth() === secondDate.getMonth() && firstDate.getFullYear() === secondDate.getFullYear();
};
