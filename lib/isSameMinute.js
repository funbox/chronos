import ensureDate from './helpers/ensureDate';

/**
 * Compares if minutes of the same date are equal
 * @param  {Date|number|string} firstValue
 * @param  {Date|number|string} secondValue
 * @return {boolean} - minutes units equality result
 */
export default (firstValue, secondValue) => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  return firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate()
    && firstDate.getHours() === secondDate.getHours()
    && firstDate.getMinutes() === secondDate.getMinutes();
};
