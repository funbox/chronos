import ensureDate from './helpers/ensure-date';

/**
 * Compares if date units are equal
 * @param  {Object|number} firstValue
 * @param  {Object|number} secondValue
 * @return {boolean} - Date units equality result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getMonth() === secondDate.getMonth() && firstDate.getFullYear() === secondDate.getFullYear();
};
