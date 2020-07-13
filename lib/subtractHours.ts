import ensureDate from './helpers/ensureDate';

/**
 * Subtract hours from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setHours(date.getHours() - quantity);

  return date;
};
