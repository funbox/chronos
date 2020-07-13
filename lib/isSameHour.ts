import ensureDate from './helpers/ensureDate';

/**
 * Compares if hours of the same date are equal
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {boolean} - hours units equality result
 */
export default (firstValue: Date | number | string, secondValue: Date | number | string): boolean => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate()
    && firstDate.getHours() === secondDate.getHours();
};
