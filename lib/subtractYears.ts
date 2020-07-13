import ensureDate from './helpers/ensureDate';

/**
 * Subtract years from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value: Date | number | string, quantity: number) => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() - quantity);

  return date;
};